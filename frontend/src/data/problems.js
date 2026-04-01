export const PROBLEMS = {
    "two-sum": {
      id: "two-sum",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
        notes: [
          "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          "You can return the answer in any order.",
        ],
      },
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]",
        },
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists",
      ],
      starterCode: {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
  console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
        python: `def twoSum(nums, target):
      # Write your solution here
      pass
  
  # Test cases
  print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
  print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
  print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
        java: `import java.util.*;
  
  class Solution {
      public static int[] twoSum(int[] nums, int target) {
          // Write your solution here
          
          return new int[0];
      }
      
      public static void main(String[] args) {
          System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
      }
  }`,
        c: `#include <stdio.h>

void twoSum(int* nums, int numsSize, int target, int* result) {
    // Write your solution here

}

void printArray(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) printf(",");
    }
    printf("]\\n");
}

int main() {
    int nums1[] = {2, 7, 11, 15};
    int result1[2];
    twoSum(nums1, 4, 9, result1);
    printArray(result1, 2); // Expected: [0,1]

    int nums2[] = {3, 2, 4};
    int result2[2];
    twoSum(nums2, 3, 6, result2);
    printArray(result2, 2); // Expected: [1,2]

    int nums3[] = {3, 3};
    int result3[2];
    twoSum(nums3, 2, 6, result3);
    printArray(result3, 2); // Expected: [0,1]

    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here

        return {};
    }
};

void printVector(vector<int>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i < v.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> res1 = sol.twoSum(nums1, 9);
    printVector(res1); // Expected: [0,1]

    vector<int> nums2 = {3, 2, 4};
    vector<int> res2 = sol.twoSum(nums2, 6);
    printVector(res2); // Expected: [1,2]

    vector<int> nums3 = {3, 3};
    vector<int> res3 = sol.twoSum(nums3, 6);
    printVector(res3); // Expected: [0,1]

    return 0;
}`,
      },
      expectedOutput: {
        javascript: "[0,1]\n[1,2]\n[0,1]",
        python: "[0, 1]\n[1, 2]\n[0, 1]",
        java: "[0, 1]\n[1, 2]\n[0, 1]",
        c: "[0,1]\n[1,2]\n[0,1]",
        cpp: "[0,1]\n[1,2]\n[0,1]",
      },
    },
  
    "reverse-string": {
      id: "reverse-string",
      title: "Reverse String",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "Write a function that reverses a string. The input string is given as an array of characters s.",
        notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
      },
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]',
        },
        {
          input: 's = ["H","a","n","n","a","h"]',
          output: '["h","a","n","n","a","H"]',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
      starterCode: {
        javascript: `function reverseString(s) {
    // Write your solution here
    
  }
  
  // Test cases
  let test1 = ["h","e","l","l","o"];
  reverseString(test1);
  console.log(test1); // Expected: ["o","l","l","e","h"]
  
  let test2 = ["H","a","n","n","a","h"];
  reverseString(test2);
  console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
        python: `def reverseString(s):
      # Write your solution here
      pass
  
  # Test cases
  test1 = ["h","e","l","l","o"]
  reverseString(test1)
  print(test1)  # Expected: ["o","l","l","e","h"]
  
  test2 = ["H","a","n","n","a","h"]
  reverseString(test2)
  print(test2)  # Expected: ["h","a","n","n","a","H"]`,
        java: `import java.util.*;
  
  class Solution {
      public static void reverseString(char[] s) {
          // Write your solution here
          
      }
      
      public static void main(String[] args) {
          char[] test1 = {'h','e','l','l','o'};
          reverseString(test1);
          System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
          
          char[] test2 = {'H','a','n','n','a','h'};
          reverseString(test2);
          System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
      }
  }`,
        c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Write your solution here

}

void printCharArray(char* s, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        printf("%c", s[i]);
        if (i < size - 1) printf(",");
    }
    printf("]\\n");
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1, 5);
    printCharArray(test1, 5); // Expected: [o,l,l,e,h]

    char test2[] = {'H','a','n','n','a','h'};
    reverseString(test2, 6);
    printCharArray(test2, 6); // Expected: [h,a,n,n,a,H]

    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    public:
    void reverseString(vector<char>& s) {
        // Write your solution here

    }
};

void printCharVector(vector<char>& v) {
    cout << "[";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i];
        if (i < v.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;
    vector<char> test1 = {'h','e','l','l','o'};
    sol.reverseString(test1);
    printCharVector(test1); // Expected: [o,l,l,e,h]

    vector<char> test2 = {'H','a','n','n','a','h'};
    sol.reverseString(test2);
    printCharVector(test2); // Expected: [h,a,n,n,a,H]

    return 0;
}`,
      },
      expectedOutput: {
        javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
        python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
        java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        c: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
        cpp: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
      },
    },
  
    "valid-palindrome": {
      id: "valid-palindrome",
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
        notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
      },
      examples: [
        {
          input: 's = "A man, a plan, a canal: Panama"',
          output: "true",
          explanation: '"amanaplanacanalpanama" is a palindrome.',
        },
        {
          input: 's = "race a car"',
          output: "false",
          explanation: '"raceacar" is not a palindrome.',
        },
        {
          input: 's = " "',
          output: "true",
          explanation:
            's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
      starterCode: {
        javascript: `function isPalindrome(s) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
  console.log(isPalindrome("race a car")); // Expected: false
  console.log(isPalindrome(" ")); // Expected: true`,
        python: `def isPalindrome(s):
      # Write your solution here
      pass
  
  # Test cases
  print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
  print(isPalindrome("race a car"))  # Expected: False
  print(isPalindrome(" "))  # Expected: True`,
        java: `class Solution {
      public static boolean isPalindrome(String s) {
          // Write your solution here
          
          return false;
      }
      
      public static void main(String[] args) {
          System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
          System.out.println(isPalindrome("race a car")); // Expected: false
          System.out.println(isPalindrome(" ")); // Expected: true
      }
  }`,
        c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

bool isPalindrome(char* s) {
    // Write your solution here

    return false;
}

int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false"); // Expected: true
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false"); // Expected: false
    printf("%s\\n", isPalindrome(" ") ? "true" : "false"); // Expected: true

    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

class Solution {
    public:
    bool isPalindrome(string s) {
        // Write your solution here

        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl; // Expected: true
    cout << (sol.isPalindrome("race a car") ? "true" : "false") << endl; // Expected: false
    cout << (sol.isPalindrome(" ") ? "true" : "false") << endl; // Expected: true

    return 0;
}`,
      },
      expectedOutput: {
        javascript: "true\nfalse\ntrue",
        python: "True\nFalse\nTrue",
        java: "true\nfalse\ntrue",
        c: "true\nfalse\ntrue",
        cpp: "true\nfalse\ntrue",
      },
    },
  
    "maximum-subarray": {
      id: "maximum-subarray",
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Array • Dynamic Programming",
      description: {
        text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
        },
        {
          input: "nums = [1]",
          output: "1",
          explanation: "The subarray [1] has the largest sum 1.",
        },
        {
          input: "nums = [5,4,-1,7,8]",
          output: "23",
          explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxSubArray(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
  console.log(maxSubArray([1])); // Expected: 1
  console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
        python: `def maxSubArray(nums):
      # Write your solution here
      pass
  
  # Test cases
  print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
  print(maxSubArray([1]))  # Expected: 1
  print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
        java: `class Solution {
      public static int maxSubArray(int[] nums) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
          System.out.println(maxSubArray(new int[]{1})); // Expected: 1
          System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
      }
  }`,
        c: `#include <stdio.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here

    return 0;
}

int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(nums1, 9)); // Expected: 6

    int nums2[] = {1};
    printf("%d\\n", maxSubArray(nums2, 1)); // Expected: 1

    int nums3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(nums3, 5)); // Expected: 23

    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

class Solution {
    public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here

        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << sol.maxSubArray(nums1) << endl; // Expected: 6

    vector<int> nums2 = {1};
    cout << sol.maxSubArray(nums2) << endl; // Expected: 1

    vector<int> nums3 = {5,4,-1,7,8};
    cout << sol.maxSubArray(nums3) << endl; // Expected: 23

    return 0;
}`,
      },
      expectedOutput: {
        javascript: "6\n1\n23",
        python: "6\n1\n23",
        java: "6\n1\n23",
        c: "6\n1\n23",
        cpp: "6\n1\n23",
      },
    },
  
    "container-with-most-water": {
      id: "container-with-most-water",
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array • Two Pointers",
      description: {
        text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        notes: [
          "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
          "Return the maximum amount of water a container can store.",
          "Notice that you may not slant the container.",
        ],
      },
      examples: [
        {
          input: "height = [1,8,6,2,5,4,8,3,7]",
          output: "49",
          explanation:
            "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
        },
        {
          input: "height = [1,1]",
          output: "1",
        },
      ],
      constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxArea(height) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
  console.log(maxArea([1,1])); // Expected: 1`,
        python: `def maxArea(height):
      # Write your solution here
      pass
  
  # Test cases
  print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
  print(maxArea([1,1]))  # Expected: 1`,
        java: `class Solution {
      public static int maxArea(int[] height) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
          System.out.println(maxArea(new int[]{1,1})); // Expected: 1
      }
  }`,
        c: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    // Write your solution here

    return 0;
}

int main() {
    int height1[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(height1, 9)); // Expected: 49

    int height2[] = {1,1};
    printf("%d\\n", maxArea(height2, 2)); // Expected: 1

    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    public:
    int maxArea(vector<int>& height) {
        // Write your solution here

        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << sol.maxArea(height1) << endl; // Expected: 49

    vector<int> height2 = {1,1};
    cout << sol.maxArea(height2) << endl; // Expected: 1

    return 0;
}`,
      },
      expectedOutput: {
        javascript: "49\n1",
        python: "49\n1",
        java: "49\n1",
        c: "49\n1",
        cpp: "49\n1",
      },
    },
    "valid-parentheses": {
      id: "valid-parentheses",
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "String • Stack",
      description: {
        text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        notes: ["An input string is valid if: Open brackets must be closed by the same type of brackets, and Open brackets must be closed in the correct order."],
      },
      examples: [
        {
          input: "s = \"()\"",
          output: "true",
          explanation: "The brackets are correctly matched.",
        },
        {
          input: "s = \"()[]{}\"",
          output: "true",
          explanation: "All brackets are correctly matched.",
        },
        {
          input: "s = \"(]\"",
          output: "false",
          explanation: "The bracket type does not match.",
        },
      ],
      constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'. "],
      starterCode: {
        javascript: `function isValid(s) {
    // Write your solution here
    
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
        python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
        java: `import java.util.*;
class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
        c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\n", isValid("()") ? "true" : "false");
    printf("%s\n", isValid("()[]{}") ? "true" : "false");
    printf("%s\n", isValid("(]") ? "true" : "false");
    return 0;
}`,
        cpp: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isValid("()") ? "true" : "false") << endl;
    cout << (sol.isValid("()[]{}") ? "true" : "false") << endl;
    cout << (sol.isValid("(]") ? "true" : "false") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "true\ntrue\nfalse",
        python: "True\nTrue\nFalse",
        java: "true\ntrue\nfalse",
        c: "true\ntrue\nfalse",
        cpp: "true\ntrue\nfalse",
      },
    },

    "find-minimum-in-rotated-sorted-array": {
      id: "find-minimum-in-rotated-sorted-array",
      title: "Find Minimum in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Array • Binary Search",
      description: {
        text: "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
        notes: ["You must write an algorithm that runs in O(log n) time."],
      },
      examples: [
        {
          input: "nums = [3,4,5,1,2]",
          output: "1",
          explanation: "The original array was [1,2,3,4,5] rotated 3 times.",
        },
        {
          input: "nums = [4,5,6,7,0,1,2]",
          output: "0",
          explanation: "The original array was [0,1,2,4,5,6,7] rotated 4 times.",
        },
        {
          input: "nums = [11,13,15,17]",
          output: "11",
          explanation: "The original array was [11,13,15,17] and it was rotated 4 times.",
        },
      ],
      constraints: ["n == nums.length", "1 ≤ n ≤ 5000", "-5000 ≤ nums[i] ≤ 5000", "All the integers of nums are unique.", "nums is sorted and rotated between 1 and n times."],
      starterCode: {
        javascript: `function findMin(nums) {
    // Write your solution here
    
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11`,
        python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))  # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0
print(findMin([11,13,15,17]))  # Expected: 11`,
        java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2})); // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2})); // Expected: 0
        System.out.println(findMin(new int[]{11,13,15,17})); // Expected: 11
    }
}`,
        c: `#include <stdio.h>

int findMin(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {3, 4, 5, 1, 2};
    printf("%d\n", findMin(n1, 5));
    int n2[] = {4, 5, 6, 7, 0, 1, 2};
    printf("%d\n", findMin(n2, 7));
    int n3[] = {11, 13, 15, 17};
    printf("%d\n", findMin(n3, 4));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {3, 4, 5, 1, 2};
    cout << sol.findMin(n1) << endl;
    vector<int> n2 = {4, 5, 6, 7, 0, 1, 2};
    cout << sol.findMin(n2) << endl;
    vector<int> n3 = {11, 13, 15, 17};
    cout << sol.findMin(n3) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "1\n0\n11",
        python: "1\n0\n11",
        java: "1\n0\n11",
        c: "1\n0\n11",
        cpp: "1\n0\n11",
      },
    },

    "contains-duplicate": {
      id: "contains-duplicate",
      title: "Contains Duplicate",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [1,2,3,1]",
          output: "true",
        },
        {
          input: "nums = [1,2,3,4]",
          output: "false",
        },
        {
          input: "nums = [1,1,1,3,3,4,3,2,4,2]",
          output: "true",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 10⁵"],
      starterCode: {
        javascript: `function containsDuplicate(nums) {
    // Write your solution here
    
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
        python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
        java: `import java.util.*;
class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }
}`,
        c: `#include <stdio.h>
#include <stdbool.h>

bool containsDuplicate(int* nums, int numsSize) {
    // Write your solution here
    return false;
}

int main() {
    int n1[] = {1, 2, 3, 1};
    printf("%s\n", containsDuplicate(n1, 4) ? "true" : "false");
    int n2[] = {1, 2, 3, 4};
    printf("%s\n", containsDuplicate(n2, 4) ? "true" : "false");
    int n3[] = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
    printf("%s\n", containsDuplicate(n3, 10) ? "true" : "false");
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your solution here
        return false;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {1, 2, 3, 1};
    cout << (sol.containsDuplicate(n1) ? "true" : "false") << endl;
    vector<int> n2 = {1, 2, 3, 4};
    cout << (sol.containsDuplicate(n2) ? "true" : "false") << endl;
    vector<int> n3 = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
    cout << (sol.containsDuplicate(n3) ? "true" : "false") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "true\nfalse\ntrue",
        python: "True\nFalse\nTrue",
        java: "true\nfalse\ntrue",
        c: "true\nfalse\ntrue",
        cpp: "true\nfalse\ntrue",
      },
    },

    "merge-intervals": {
      id: "merge-intervals",
      title: "Merge Intervals",
      difficulty: "Medium",
      category: "Array • Sorting",
      description: {
        text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        notes: [],
      },
      examples: [
        {
          input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
          output: "[[1,6],[8,10],[15,18]]",
          explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
        },
      ],
      constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2"],
      starterCode: {
        javascript: `function merge(intervals) {
    // Write your solution here
    
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));`,
        python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))`,
        java: `import java.util.*;
class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>

void merge(int intervals[][2], int n, int result[][2], int* rSize) {
    // Write your solution here
    *rSize = 0;
}

int main() {
    int intervals[][2] = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
    int result[4][2];
    int rSize;
    merge(intervals, 4, result, &rSize);
    printf("[");
    for (int i = 0; i < rSize; i++) {
        printf("[%d,%d]", result[i][0], result[i][1]);
        if (i < rSize - 1) printf(",");
    }
    printf("]\n");
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Write your solution here
        return {};
    }
};

int main() {
    Solution sol;
    vector<vector<int>> iv = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
    auto res = sol.merge(iv);
    cout << "[";
    for (int i = 0; i < res.size(); i++) {
        cout << "[" << res[i][0] << "," << res[i][1] << "]";
        if (i < res.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]",
        python: "[[1, 6], [8, 10], [15, 18]]",
        java: "[[1, 6], [8, 10], [15, 18]]",
        c: "[[1,6],[8,10],[15,18]]",
        cpp: "[[1,6],[8,10],[15,18]]",
      },
    },

    "best-time-to-buy-and-sell-stock": {
      id: "best-time-to-buy-and-sell-stock",
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      category: "Array",
      description: {
        text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
      },
      examples: [
        {
          input: "prices = [7,1,5,3,6,4]",
          output: "5",
          explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
        },
      ],
      constraints: ["1 ≤ prices.length ≤ 10⁵"],
      starterCode: {
        javascript: `function maxProfit(prices) {
    // Write your solution here
    
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4]));`,
        python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))`,
        java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
    }
}`,
        c: `#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    // Write your solution here
    return 0;
}

int main() {
    int p[] = {7, 1, 5, 3, 6, 4};
    printf("%d\n", maxProfit(p, 6));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> p = {7, 1, 5, 3, 6, 4};
    cout << sol.maxProfit(p) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "5",
        python: "5",
        java: "5",
        c: "5",
        cpp: "5",
      },
    },

    "group-anagrams": {
      id: "group-anagrams",
      title: "Group Anagrams",
      difficulty: "Medium",
      category: "Array • Hash Table",
      description: {
        text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        notes: [],
      },
      examples: [
        {
          input: "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
          output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
          explanation: "Return order does not matter.",
        },
      ],
      constraints: ["1 ≤ strs.length ≤ 10⁴"],
      starterCode: {
        javascript: `function groupAnagrams(strs) {
    // Write your solution here
    
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));`,
        python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))`,
        java: `import java.util.*;
class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
    }
}`,
        c: `#include <stdio.h>
#include <string.h>

// Write your solution here
// Note: C does not have built-in hash maps.
// Implement grouping logic manually.

int main() {
    // Placeholder output
    printf("[[bat],[nat,tan],[ate,eat,tea]]\n");
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your solution here
        return {};
    }
};

int main() {
    Solution sol;
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    auto res = sol.groupAnagrams(strs);
    cout << "[";
    for (int i = 0; i < res.size(); i++) {
        cout << "[";
        for (int j = 0; j < res[i].size(); j++) {
            cout << res[i][j];
            if (j < res[i].size() - 1) cout << ",";
        }
        cout << "]";
        if (i < res.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]",
        python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
        java: "[[eat, tea, ate], [tan, nat], [bat]]",
        c: "[[bat],[nat,tan],[ate,eat,tea]]",
        cpp: "[[eat,tea,ate],[tan,nat],[bat]]",
      },
    },

    "longest-substring": {
      id: "longest-substring",
      title: "Longest Substring Without Repeating",
      difficulty: "Medium",
      category: "String • Sliding Window",
      description: {
        text: "Given a string s, find the length of the longest substring without repeating characters.",
        notes: [],
      },
      examples: [
        {
          input: "s = \"abcabcbb\"",
          output: "3",
          explanation: "The answer is 'abc', with the length of 3.",
        },
      ],
      constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
      starterCode: {
        javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));`,
        python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))`,
        java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
    }
}`,
        c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", lengthOfLongestSubstring("abcabcbb"));
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.lengthOfLongestSubstring("abcabcbb") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "3",
        python: "3",
        java: "3",
        c: "3",
        cpp: "3",
      },
    },

    "climbing-stairs": {
      id: "climbing-stairs",
      title: "Climbing Stairs",
      difficulty: "Easy",
      category: "DP • Math",
      description: {
        text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        notes: [],
      },
      examples: [
        {
          input: "n = 3",
          output: "3",
          explanation: "1. 1+1+1\n2. 1+2\n3. 2+1",
        },
      ],
      constraints: ["1 ≤ n ≤ 45"],
      starterCode: {
        javascript: `function climbStairs(n) {
    // Write your solution here
    
}

// Test cases
console.log(climbStairs(3));`,
        python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(3))`,
        java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(climbStairs(3));
    }
}`,
        c: `#include <stdio.h>

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", climbStairs(3));
    return 0;
}`,
        cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.climbStairs(3) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "3",
        python: "3",
        java: "3",
        c: "3",
        cpp: "3",
      },
    },

    "search-rotated-array": {
      id: "search-rotated-array",
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
      category: "Array • Binary Search",
      description: {
        text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        notes: ["You must write an algorithm with O(log n) runtime complexity."],
      },
      examples: [
        {
          input: "nums = [4,5,6,7,0,1,2], target = 0",
          output: "4",
        },
        {
          input: "nums = [4,5,6,7,0,1,2], target = 3",
          output: "-1",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function search(nums, target) {
    // Write your solution here
    
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1`,
        python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1`,
        java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));
    }
}`,
        c: `#include <stdio.h>

int search(int* nums, int numsSize, int target) {
    // Write your solution here
    return -1;
}

int main() {
    int n[] = {4, 5, 6, 7, 0, 1, 2};
    printf("%d\n", search(n, 7, 0));
    printf("%d\n", search(n, 7, 3));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your solution here
        return -1;
    }
};

int main() {
    Solution sol;
    vector<int> n = {4, 5, 6, 7, 0, 1, 2};
    cout << sol.search(n, 0) << endl;
    cout << sol.search(n, 3) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "4\n-1",
        python: "4\n-1",
        java: "4\n-1",
        c: "4\n-1",
        cpp: "4\n-1",
      },
    },

    "missing-number": {
      id: "missing-number",
      title: "Missing Number",
      difficulty: "Easy",
      category: "Array • Bit Manipulation",
      description: {
        text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [3,0,1]",
          output: "2",
        },
        {
          input: "nums = [9,6,4,2,3,5,7,0,1]",
          output: "8",
        },
      ],
      constraints: ["n == nums.length", "1 ≤ n ≤ 10⁴"],
      starterCode: {
        javascript: `function missingNumber(nums) {
    // Write your solution here
    
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8`,
        python: `def missingNumber(nums):
    # Write your solution here
    pass

# Test cases
print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([9,6,4,2,3,5,7,0,1]))  # Expected: 8`,
        java: `class Solution {
    public static int missingNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1}));
        System.out.println(missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));
    }
}`,
        c: `#include <stdio.h>

int missingNumber(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {3, 0, 1};
    printf("%d\n", missingNumber(n1, 3));
    int n2[] = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    printf("%d\n", missingNumber(n2, 9));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {3, 0, 1};
    cout << sol.missingNumber(n1) << endl;
    vector<int> n2 = {9, 6, 4, 2, 3, 5, 7, 0, 1};
    cout << sol.missingNumber(n2) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "2\n8",
        python: "2\n8",
        java: "2\n8",
        c: "2\n8",
        cpp: "2\n8",
      },
    },

    "number-of-1-bits": {
      id: "number-of-1-bits",
      title: "Number of 1 Bits",
      difficulty: "Easy",
      category: "Bit Manipulation",
      description: {
        text: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
        notes: [],
      },
      examples: [
        {
          input: "n = 11",
          output: "3",
          explanation: "The input binary string 1011 has three set bits.",
        },
      ],
      constraints: ["1 ≤ n ≤ 2³¹ - 1"],
      starterCode: {
        javascript: `function hammingWeight(n) {
    // Write your solution here
    
}

// Test cases
console.log(hammingWeight(11)); // Expected: 3`,
        python: `def hammingWeight(n):
    # Write your solution here
    pass

# Test cases
print(hammingWeight(11))  # Expected: 3`,
        java: `class Solution {
    public static int hammingWeight(int n) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(hammingWeight(11));
    }
}`,
        c: `#include <stdio.h>

int hammingWeight(unsigned int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", hammingWeight(11));
    return 0;
}`,
        cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    int hammingWeight(uint32_t n) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.hammingWeight(11) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "3",
        python: "3",
        java: "3",
        c: "3",
        cpp: "3",
      },
    },

    "product-except-self": {
      id: "product-except-self",
      title: "Product of Array Except Self",
      difficulty: "Medium",
      category: "Array",
      description: {
        text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
        notes: ["The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.", "You must write an algorithm that runs in O(n) time and without using the division operation."],
      },
      examples: [
        {
          input: "nums = [1,2,3,4]",
          output: "[24,12,8,6]",
        },
      ],
      constraints: ["2 ≤ nums.length ≤ 10⁵"],
      starterCode: {
        javascript: `function productExceptSelf(nums) {
    // Write your solution here
    
}

// Test cases
console.log(productExceptSelf([1,2,3,4]));`,
        python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))`,
        java: `import java.util.*;
class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
    }
}`,
        c: `#include <stdio.h>

void productExceptSelf(int* nums, int n, int* result) {
    // Write your solution here
}

int main() {
    int nums[] = {1, 2, 3, 4};
    int res[4];
    productExceptSelf(nums, 4, res);
    printf("[%d,%d,%d,%d]\n", res[0], res[1], res[2], res[3]);
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 4};
    auto res = sol.productExceptSelf(nums);
    cout << "[";
    for (int i = 0; i < res.size(); i++) {
        cout << res[i];
        if (i < res.size() - 1) cout << ",";
    }
    cout << "]" << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "[ 24, 12, 8, 6 ]",
        python: "[24, 12, 8, 6]",
        java: "[24, 12, 8, 6]",
        c: "[24,12,8,6]",
        cpp: "[24,12,8,6]",
      },
    },

    "find-duplicate-number": {
      id: "find-duplicate-number",
      title: "Find the Duplicate Number",
      difficulty: "Medium",
      category: "Array • Two Pointers",
      description: {
        text: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, there is only one repeated number in nums, return this repeated number.",
        notes: ["You must solve the problem without modifying the array and using only constant extra space."],
      },
      examples: [
        {
          input: "nums = [1,3,4,2,2]",
          output: "2",
        },
        {
          input: "nums = [3,1,3,4,2]",
          output: "3",
        },
      ],
      constraints: ["1 ≤ n ≤ 10⁵", "nums.length == n + 1"],
      starterCode: {
        javascript: `function findDuplicate(nums) {
    // Write your solution here
    
}

// Test cases
console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
console.log(findDuplicate([3,1,3,4,2])); // Expected: 3`,
        python: `def findDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(findDuplicate([1,3,4,2,2]))  # Expected: 2
print(findDuplicate([3,1,3,4,2]))  # Expected: 3`,
        java: `class Solution {
    public static int findDuplicate(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(findDuplicate(new int[]{1,3,4,2,2}));
        System.out.println(findDuplicate(new int[]{3,1,3,4,2}));
    }
}`,
        c: `#include <stdio.h>

int findDuplicate(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {1, 3, 4, 2, 2};
    printf("%d\n", findDuplicate(n1, 5));
    int n2[] = {3, 1, 3, 4, 2};
    printf("%d\n", findDuplicate(n2, 5));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {1, 3, 4, 2, 2};
    cout << sol.findDuplicate(n1) << endl;
    vector<int> n2 = {3, 1, 3, 4, 2};
    cout << sol.findDuplicate(n2) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "2\n3",
        python: "2\n3",
        java: "2\n3",
        c: "2\n3",
        cpp: "2\n3",
      },
    },

    "majority-element": {
      id: "majority-element",
      title: "Majority Element",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
        notes: ["You may assume that the majority element always exists in the array."],
      },
      examples: [
        {
          input: "nums = [3,2,3]",
          output: "3",
        },
        {
          input: "nums = [2,2,1,1,1,2,2]",
          output: "2",
        },
      ],
      constraints: ["n == nums.length", "1 ≤ n ≤ 5 * 10⁴"],
      starterCode: {
        javascript: `function majorityElement(nums) {
    // Write your solution here
    
}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
        python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,
        java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3}));
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));
    }
}`,
        c: `#include <stdio.h>

int majorityElement(int* nums, int numsSize) {
    // Write your solution here
    return 0;
}

int main() {
    int n1[] = {3, 2, 3};
    printf("%d\n", majorityElement(n1, 3));
    int n2[] = {2, 2, 1, 1, 1, 2, 2};
    printf("%d\n", majorityElement(n2, 7));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> n1 = {3, 2, 3};
    cout << sol.majorityElement(n1) << endl;
    vector<int> n2 = {2, 2, 1, 1, 1, 2, 2};
    cout << sol.majorityElement(n2) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "3\n2",
        python: "3\n2",
        java: "3\n2",
        c: "3\n2",
        cpp: "3\n2",
      },
    },

    "valid-anagram": {
      id: "valid-anagram",
      title: "Valid Anagram",
      difficulty: "Easy",
      category: "String • Hash Table",
      description: {
        text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
      },
      examples: [
        {
          input: "s = \"anagram\", t = \"nagaram\"",
          output: "true",
        },
        {
          input: "s = \"rat\", t = \"car\"",
          output: "false",
        },
      ],
      constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴"],
      starterCode: {
        javascript: `function isAnagram(s, t) {
    // Write your solution here
    
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
        python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
        java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }
}`,
        c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isAnagram(char* s, char* t) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\n", isAnagram("anagram", "nagaram") ? "true" : "false");
    printf("%s\n", isAnagram("rat", "car") ? "true" : "false");
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your solution here
        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isAnagram("anagram", "nagaram") ? "true" : "false") << endl;
    cout << (sol.isAnagram("rat", "car") ? "true" : "false") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "true\nfalse",
        python: "True\nFalse",
        java: "true\nfalse",
        c: "true\nfalse",
        cpp: "true\nfalse",
      },
    },

    "median-of-two-sorted-arrays": {
      id: "median-of-two-sorted-arrays",
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Array • Binary Search",
      description: {
        text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        notes: ["The overall run time complexity should be O(log (m+n))."],
      },
      examples: [
        {
          input: "nums1 = [1,3], nums2 = [2]",
          output: "2.0",
          explanation: "merged array = [1,2,3] and median is 2.",
        },
        {
          input: "nums1 = [1,2], nums2 = [3,4]",
          output: "2.5",
          explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
        },
      ],
      constraints: ["0 ≤ m,n ≤ 1000", "1 ≤ m + n ≤ 2000"],
      starterCode: {
        javascript: `function findMedianSortedArrays(nums1, nums2) {
    // Write your solution here
    
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));`,
        python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))
print(findMedianSortedArrays([1,2], [3,4]))`,
        java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
    }
}`,
        c: `#include <stdio.h>

double findMedianSortedArrays(int* nums1, int n1, int* nums2, int n2) {
    // Write your solution here
    return 0.0;
}

int main() {
    int a[] = {1, 3}, b[] = {2};
    printf("%.1f\n", findMedianSortedArrays(a, 2, b, 1));
    int c[] = {1, 2}, d[] = {3, 4};
    printf("%.1f\n", findMedianSortedArrays(c, 2, d, 2));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Write your solution here
        return 0.0;
    }
};

int main() {
    Solution sol;
    vector<int> a = {1, 3}, b = {2};
    cout << sol.findMedianSortedArrays(a, b) << endl;
    vector<int> c = {1, 2}, d = {3, 4};
    cout << sol.findMedianSortedArrays(c, d) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "2\n2.5",
        python: "2.0\n2.5",
        java: "2.0\n2.5",
        c: "2.0\n2.5",
        cpp: "2\n2.5",
      },
    },

    "regular-expression-matching": {
      id: "regular-expression-matching",
      title: "Regular Expression Matching",
      difficulty: "Hard",
      category: "String • DP",
      description: {
        text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
        notes: ["'.' Matches any single character.", "'*' Matches zero or more of the preceding element."],
      },
      examples: [
        {
          input: "s = \"aa\", p = \"a\"",
          output: "false",
        },
        {
          input: "s = \"aa\", p = \"a*\"",
          output: "true",
        },
      ],
      constraints: ["1 ≤ s.length ≤ 20", "1 ≤ p.length ≤ 20"],
      starterCode: {
        javascript: `function isMatch(s, p) {
    // Write your solution here
    
}

// Test cases
console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true`,
        python: `def isMatch(s, p):
    # Write your solution here
    pass

# Test cases
print(isMatch("aa", "a"))  # Expected: False
print(isMatch("aa", "a*"))  # Expected: True`,
        java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        return false;
    }
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a"));
        System.out.println(isMatch("aa", "a*"));
    }
}`,
        c: `#include <stdio.h>
#include <stdbool.h>

bool isMatch(char* s, char* p) {
    // Write your solution here
    return false;
}

int main() {
    printf("%s\n", isMatch("aa", "a") ? "true" : "false");
    printf("%s\n", isMatch("aa", "a*") ? "true" : "false");
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        // Write your solution here
        return false;
    }
};

int main() {
    Solution sol;
    cout << (sol.isMatch("aa", "a") ? "true" : "false") << endl;
    cout << (sol.isMatch("aa", "a*") ? "true" : "false") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "false\ntrue",
        python: "False\nTrue",
        java: "false\ntrue",
        c: "false\ntrue",
        cpp: "false\ntrue",
      },
    },

    "longest-valid-parentheses": {
      id: "longest-valid-parentheses",
      title: "Longest Valid Parentheses",
      difficulty: "Hard",
      category: "String • Stack • DP",
      description: {
        text: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
        notes: [],
      },
      examples: [
        {
          input: "s = \"(()\"",
          output: "2",
          explanation: "The longest valid parentheses substring is \"()\".",
        },
        {
          input: "s = \")()())\"",
          output: "4",
          explanation: "The longest valid parentheses substring is \"()()\".",
        },
      ],
      constraints: ["0 ≤ s.length ≤ 3 * 10⁴"],
      starterCode: {
        javascript: `function longestValidParentheses(s) {
    // Write your solution here
    
}

// Test cases
console.log(longestValidParentheses("(()")); // Expected: 2
console.log(longestValidParentheses(")()())")); // Expected: 4`,
        python: `def longestValidParentheses(s):
    # Write your solution here
    pass

# Test cases
print(longestValidParentheses("(()"))  # Expected: 2
print(longestValidParentheses(")()())"))  # Expected: 4`,
        java: `class Solution {
    public static int longestValidParentheses(String s) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(longestValidParentheses("(()"));
        System.out.println(longestValidParentheses(")()())"));
    }
}`,
        c: `#include <stdio.h>

int longestValidParentheses(char* s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", longestValidParentheses("(()"));
    printf("%d\n", longestValidParentheses(")()())"));
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.longestValidParentheses("(()") << endl;
    cout << sol.longestValidParentheses(")()())") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "2\n4",
        python: "2\n4",
        java: "2\n4",
        c: "2\n4",
        cpp: "2\n4",
      },
    },

    "trapping-rain-water": {
      id: "trapping-rain-water",
      title: "Trapping Rain Water",
      difficulty: "Hard",
      category: "Array • Two Pointers • Stack",
      description: {
        text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        notes: [],
      },
      examples: [
        {
          input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
          output: "6",
        },
      ],
      constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
      starterCode: {
        javascript: `function trap(height) {
    // Write your solution here
    
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6`,
        python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6`,
        java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
    }
}`,
        c: `#include <stdio.h>

int trap(int* height, int heightSize) {
    // Write your solution here
    return 0;
}

int main() {
    int h[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    printf("%d\n", trap(h, 12));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    vector<int> h = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    cout << sol.trap(h) << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "6",
        python: "6",
        java: "6",
        c: "6",
        cpp: "6",
      },
    },

    "edit-distance": {
      id: "edit-distance",
      title: "Edit Distance",
      difficulty: "Hard",
      category: "String • DP",
      description: {
        text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations: Insert a character, Delete a character, Replace a character.",
        notes: [],
      },
      examples: [
        {
          input: "word1 = \"horse\", word2 = \"ros\"",
          output: "3",
          explanation: "horse -> rorse -> rose -> ros",
        },
        {
          input: "word1 = \"intention\", word2 = \"execution\"",
          output: "5",
        },
      ],
      constraints: ["0 ≤ word1.length, word2.length ≤ 500"],
      starterCode: {
        javascript: `function minDistance(word1, word2) {
    // Write your solution here
    
}

// Test cases
console.log(minDistance("horse", "ros")); // Expected: 3
console.log(minDistance("intention", "execution")); // Expected: 5`,
        python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance("horse", "ros"))  # Expected: 3
print(minDistance("intention", "execution"))  # Expected: 5`,
        java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros"));
        System.out.println(minDistance("intention", "execution"));
    }
}`,
        c: `#include <stdio.h>

int minDistance(char* word1, char* word2) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\n", minDistance("horse", "ros"));
    printf("%d\n", minDistance("intention", "execution"));
    return 0;
}`,
        cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int minDistance(string word1, string word2) {
        // Write your solution here
        return 0;
    }
};

int main() {
    Solution sol;
    cout << sol.minDistance("horse", "ros") << endl;
    cout << sol.minDistance("intention", "execution") << endl;
    return 0;
}`,
      },
      expectedOutput: {
        javascript: "3\n5",
        python: "3\n5",
        java: "3\n5",
        c: "3\n5",
        cpp: "3\n5",
      },
    },

  };
  
  export const LANGUAGE_CONFIG = {
    javascript: {
      name: "JavaScript",
      icon: "/javascript.png",
      monacoLang: "javascript",
    },
    python: {
      name: "Python",
      icon: "/python.png",
      monacoLang: "python",
    },
    java: {
      name: "Java",
      icon: "/java.png",
      monacoLang: "java",
    },
    c: {
      name: "C",
      icon: "/c.png",
      monacoLang: "c",
    },
    cpp: {
      name: "C++",
      icon: "/cpp.png",
      monacoLang: "cpp",
    },
  };