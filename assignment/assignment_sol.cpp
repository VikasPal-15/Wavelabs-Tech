#include <bits/stdc++.h>
using namespace std;

vector<int> disc,low;
int timer;

vector<pair<int,int>> bridge;

void dfs(vector<vector<int>>& graph,int cur,int par = -1){
    disc[cur] = low[cur] = timer++;
    int no_child = 0;
    for(auto child : graph[cur]){
        if(disc[child] == -1){
            dfs(graph,child,cur);
            no_child++;
            low[cur] = min(low[cur],low[child]);
            if(low[child] > disc[cur]){
                bridge.push_back({cur,child});
            }
        }else if(child != par){
            low[cur] = min(low[cur], disc[child]);
        }
    }
    return;
}

int main() {
    int n;cin>>n; // no. of nodes
    int m;cin>>m; // no. of edges

    vector<vector<int>> graph(n);
    for(auto i=0;i<m;i++){
        int x,y;cin>>x>>y;
        graph[x].push_back(y);
        graph[y].push_back(x);
    }

    disc.assign(n,-1);
    low.assign(n,-1);
    timer = 0;

    dfs(graph,0);

    for(auto i:bridge){
        cout<<i.first<<" "<<i.second<<"\n";
    }
    return 0;
}