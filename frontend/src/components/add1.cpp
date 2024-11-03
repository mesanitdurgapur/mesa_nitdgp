#include <iostream>
#include <vector>
using namespace std;

pair<int, pair<int, int>> maxSubArraySum(vector<int>& arr) {
    int max_sum = arr[0];
    int current_sum = arr[0];
    int start = 0, end = 0, temp_start = 0;

    for (int i = 1; i < arr.size(); i++) {
        if (current_sum + arr[i] > arr[i]) {
            current_sum += arr[i];
        } else {
            current_sum = arr[i];
            temp_start = i;
        }

        if (current_sum > max_sum) {
            max_sum = current_sum;
            start = temp_start;
            end = i;
        }
    }

    return {max_sum, {start, end}};
}

int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    vector<int> arr(n);
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    pair<int, pair<int, int>> result = maxSubArraySum(arr);
    int max_sum = result.first;
    int start = result.second.first;
    int end = result.second.second;

    cout << "Maximum sum is: " << max_sum << endl;
    cout << "Subarray with the maximum sum is from index " << start << " to " << end << endl;

    return 0;
}