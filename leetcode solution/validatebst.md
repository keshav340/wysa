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
