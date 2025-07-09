The tasks 1-4 are in the above code and the task 5 algorithm is given below


BubbleSortLinkedList(head):

    if head is NULL or head.next is NULL:
        return head

    repeat
        swapped = false

        prev = NULL
        current = head

        while current and current.next are not NULL:
            
            nextNode = current.next

            if current.data > nextNode.data:

                if prev == NULL:
                    head = nextNode
                else:
                    prev.next = nextNode

                current.next = nextNode.next
                nextNode.next = current

                swapped = true

                prev = nextNode
            else:
                prev = current
                current = current.next

    until swapped == false

    return head
