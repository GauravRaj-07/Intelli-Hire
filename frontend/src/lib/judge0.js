// Code execution helper (currently using Judge0 public API)

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  c: 50,
  cpp: 54,
};

/**
 * Execute user code against Judge0.
 *
 * @param {string} language - programming language key (e.g. "javascript")
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */
export const executeCode = async (language, code) => {
  try {
    const language_id = LANGUAGE_IDS[language];

    if (!language_id) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Base64 encode source code to avoid issues with special characters (e.g. < > in C/C++)
    const encodedCode = btoa(unescape(encodeURIComponent(code)));

    const response = await fetch(
      "https://ce.judge0.com/submissions?base64_encoded=true&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: encodedCode,
          language_id,
          stdin: "",
        }),
      }
    );

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const result = await response.json();

    // Decode base64 response fields
    const decodeB64 = (str) => {
      if (!str) return "";
      try { return decodeURIComponent(escape(atob(str))); }
      catch { return atob(str); }
    };

    const stdout = decodeB64(result.stdout).trim();
    const stderr = decodeB64(result.stderr || result.compile_output).trim();

    if (stderr) {
      return {
        success: false,
        output: stdout || "",
        error: stderr,
      };
    }

    return {
      success: true,
      output: stdout || "No Output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
};

// piston API is a service for code execution

// const PISTON_API="https://emkc.org/api/v2/piston"

// const LANGUAGE_VERSIONS={
//     javascript:{language:"javascript",version:"18.15.0"},
//     python:{language:"python",version:"3.10.0"},
//     java:{language:"java",version:"15.0.2"},
// }

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?:string}>}
 */

// export async function executeCode(language,code){
//     try {
//         const languageConfig=LANGUAGE_VERSIONS[language]

//         if(!languageConfig){
//             return {
//                 success:false,
//                 error:`Unsupported language: ${language}`
//             }
//         }
//         const response=await fetch(`${PISTON_API}/execute`,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 language:languageConfig.language,
//                 version:languageConfig.version,
//                 files:[
//                     {
//                         name:`main.${getFileExtension(language)}`,
//                         content:code
//                     }
//                 ]
//             })
//         })

//         if(!response.ok){
//             return {
//                 success:false,
//                 error:`HTTP error! status: ${response.status}`
//             }
//         }

//         const data=await response.json()

//         const output=data.run.output || ""
//         const stderr=data.run.stderr || ""

//          if(stderr){
//             return {
//                 success:false,
//                 output:output,
//                 error:stderr
//             }
//          }

//          return {
//             success:true,
//             output:output || "No Output"
//          }

//     } catch (error) {
//         return {
//             success:false,
//             error:`Failed to execute code: ${error.message}`
//         }
//     }
// }




// function getFileExtension(language){
//     const extensions={
//         javascript:"js",
//         python:"py",
//         java:"java"
//     }

//     return extensions[language] || "txt"
// }