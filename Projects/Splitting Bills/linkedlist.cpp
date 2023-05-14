#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    //constructor
    Node(int d)
    {
        this -> data = d;
        this -> next = NULL;
    }

    //destructor
    ~Node(){
        int value = this -> data;
        //memory free
        if(this->next != NULL){
            delete next;
            this -> next = NULL;
        }
        cout << "Memory is free for node with data " << value << endl;
    }
};

void InsertAtHead(Node* &head, int d)
{
    Node* temp = new Node(d);
    temp -> next = head;
    head = temp;
}
void InsertAtTail(Node* &tail, int d)
{
    Node* temp = new Node(d);
    tail -> next = temp;
    tail = temp;
}

void InsertAtPosition(Node* head, int position, int d)
{
    Node* temp = head;
    int cnt = 1;

    while(cnt < position-1)
    {
        temp = temp -> next;
        cnt++;
    }

    // creating a new node for d

    Node* insertToNode = new Node(d);
    insertToNode -> next = temp -> next;
    temp -> next = insertToNode;
}
void deleteNode(Node* &head, int position)
{
    //deleting first or start node
    if(position == 1){
       Node* temp = head;
       head = head -> next;

       //memory free start node
       temp -> next = NULL;
       delete temp;
    }
    else{
        //deleting any middle or last node
        Node* curr = head;
        Node* prev = NULL;
     
        int cnt = 1;
        while(cnt < position)
        {
            prev = curr;
            curr = curr -> next;
            cnt++;
        }

        prev -> next = curr -> next;
        curr -> next = NULL;
        delete curr;
    }
}
void printlist(Node* head)
{
    while(head != NULL)
    {
        cout << head -> data <<" ";
        head = head -> next;

    }
    cout << endl;
}
int main() {
    // Construct new node
     Node* node1 = new Node(9);
     
     Node* head = node1;
     Node* tail = node1;
  
     //cout << node1 -> data <<endl;
     //cout << node1 -> next <<endl;
     printlist(head);
     InsertAtHead(head, 10);
     printlist(head);
     InsertAtTail(tail, 11);
     printlist(head);
     InsertAtTail(tail, 15);
     printlist(head);
     InsertAtTail(tail, 16);
     printlist(head);
     InsertAtPosition(head, 4, 12);
     printlist(head);
     deleteNode(head, 2);
     printlist(head);
     deleteNode(head, 1);
     printlist(head);
     deleteNode(head, 4);
     printlist(head);

}
