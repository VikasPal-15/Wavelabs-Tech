#include<bits/stdc++.h>
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

};

void InsertAtTail(Node* &tail, int d)
{
    Node* temp = new Node(d);
    tail -> next = temp;
    tail = temp;
}
Node* reverseLL(Node* &head)
{
    Node* Prev = NULL;
    Node* Curr = head;
    Node* forward = NULL;

    while(Curr != NULL)
    {
          forward = Curr -> next;
          Curr -> next = Prev;
          Prev = Curr;
          Curr = forward;
    }
    head = Prev;
    return head;
}
void printlist(Node* head)
{
    while(head != NULL)
    {
        cout<< head -> data <<" ";
        head = head -> next;
    }
    cout << endl;
}
int main()
{
    //construct new node
    Node* node1 = new Node(9);

    Node* head = node1;
    Node* tail = node1;

    InsertAtTail(tail,10);
    InsertAtTail(tail,11);
    InsertAtTail(tail,12);
    InsertAtTail(tail,13);
    printlist(head);

    reverseLL(head);
    printlist(head);

}