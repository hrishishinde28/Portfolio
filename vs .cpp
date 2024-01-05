vector<int> lexicographicallySmallestSequence(int n, vector<int> a, vector<int> b)
{
    vector<int> arr[n + 1];

    for (int i = 0; i < b.size(); i++)
    {
        arr[b[i]].push_back(a[i]);
        arr[a[i]].push_back(b[i]);
    }

    vector<int> ans;
    vector<int> vis(n + 1);
    priority_queue<int, vector<int>, greater<int>> pq;
    vis[1] = 1;
    pq.push(1);
    while (!pq.empty())
    {
        int node = pq.top();
        pq.pop();
        ans.push_back(node);
        for (auto it : arr[node])
        {
            if (!vis[it])
            {
                pq.push(it);
                vis[it] = 1;
            }
        }
    }
return ans;
}