#include <bits/stdc++.h>
using namespace std;

class MultiHeap {
private:
    int nodeCapacity;
    int maxKeys;    
    int totalNodes;
    vector<int> heap;  

    int parent(int i) {
        return (i - 1) / nodeCapacity;
    }

    void heapify(int i) {
        int largest = i;
        int left = i * nodeCapacity + 1;
        int right = i * nodeCapacity + 2;

        for (int j = 0; j < nodeCapacity && left + j < heap.size(); ++j) {
            if (heap[left + j] > heap[largest]) {
                largest = left + j;
            }
        }

        if (largest != i) {
            swap(heap[i], heap[largest]);
            heapify(largest);
        }
    }

public:

    MultiHeap(int p, int maxKeys) : nodeCapacity(p), maxKeys(maxKeys), totalNodes(0) {
        heap.reserve(maxKeys);
    }

    void insert(int key) {
        heap.push_back(key);
        int i = heap.size() - 1;

        while (i != 0 && heap[parent(i)] < heap[i]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }

    int findMax() {
        if (!heap.empty())
            return heap[0];
        else
            return -1; 
    }

    int delMax() {
        if (heap.size() == 0)
            return -1; 

        int maxElement = heap[0];

        heap[0] = heap.back();
        heap.pop_back();
        heapify(0);

        return maxElement;
    }

    void printHeap() {
        int node = 0;
        for (int i = 0; i < heap.size(); ++i) {
            if (i % nodeCapacity == 0) {
                cout << "\nNode " << ++node << ": ";
            }
            cout << heap[i] << " ";
        }
        cout << "\n";
    }

    vector<int> sortHeap() {
        vector<int> sortedArray;

        while (!heap.empty()) {
            sortedArray.push_back(delMax());
        }

        reverse(sortedArray.begin(), sortedArray.end());

        return sortedArray;
    }
};

int main() {
    int p, maxKeys;
    cout << "Enter node capacity and total number of keys to be inserted: ";
    cin >> p >> maxKeys;

    MultiHeap multiHeap(p, maxKeys);

    cout << "Enter the keys to be inserted:\n";
    vector<int> inputArray;
    for (int i = 0; i < maxKeys; ++i) {
        int key;
        cin >> key;
        multiHeap.insert(key);
        inputArray.push_back(key);
    }

    cout << "\nInsertion complete. Multi-heap structure:\n";
    multiHeap.printHeap();

    multiHeap.delMax();

    cout << "\nAfter deleting the max element. Multi-heap structure:\n";
    multiHeap.printHeap();

    vector<int> sortedArray = multiHeap.sortHeap();

    sort(inputArray.begin(), inputArray.end());

    cout << "\nSorted array : ";
    for (int key : sortedArray) {
        cout << key << " ";
    }
    return 0;
}
