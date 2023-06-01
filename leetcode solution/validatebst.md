## Solution

```cpp
class Solution {
public:
    bool check(TreeNode* root, long minval, long maxval) {
        if (root == nullptr) {
            return true;
        }
        if (root->val <= minval || root->val >= maxval) {
            return false;
        }
        return check(root->left, minval, root->val) && check(root->right, root->val, maxval);
    }

    bool isValidBST(TreeNode* root) {
        bool ans = check(root, LONG_MIN, LONG_MAX);
        return ans;
    }
};
The time complexity of the isValidBST function in the given code is O(N), where N is the number of nodes in the binary tree.In the check function, the time complexity is also O(N), where N is the number of nodes in the subtree rooted at the current node., the total time complexity of the algorithm is still O(N)
The space complexity of the algorithm is O(H), where H is the height of the binary tree.
