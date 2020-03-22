def remover(list,x):
    """
    :param list: the list you want to remove stuff out of
    :param x: the element you want to remove
    :return: list without any x elements
    """
    while x in list: # loop until all removed
        list.remove(x)
    return list
def finder(list,x,qNum):
    """
    :param list: list with all of the text of the questions
    :param x: What character to find
    :param qNum: The question number to stop at
    :return: anotherList: returns list with only question and choices as elements
    """
    anotherList = []
    for i in range(len(list)):
        if list[i][0:2]==x: #since the options are always "D." thus the first 2 characters are equal to x which is specified by user
            temp = []# empty list to store all elements
            for y in range(i,-1,-1):# we have found "D." so now go back and store everything until we at the end of question
                temp.append(list[y])# append all elements that you come across
                try:
                    if(int(list[y][0:2])==qNum): # questions in quantitative part range from 51 to 75
                        anotherList.append(temp)# anotherList is the final list with questions
                        qNum+=1
                        temp = [] # emptied to store the next questions
                        break
                except:
                    pass
    return (anotherList)
def finder2(list,x,qNum):
    """
    function to get only the questions and returns them
    :param list: list with all of the questions and choices
    :param x: argument where the question ends
    :param qNum: which question to be stored
    :return: temp: just the question concerned with the qNum
    """
    for i in range(len(list)):
        if list[i][0:2]==x:
            temp = []
            for y in range(i-1,-1,-1):
                temp.append(list[y])
                try:
                    if(int(list[y][0:2])==qNum):
                        temp[len(temp)-1] = temp[len(temp)-1][3:-1]# removes the number question number.
                        return (temp)
                except:
                    pass
def finder3(list,x):
    """
    function to get only the choices and returns them
    :param list: list with all of the questions and choices
    :param x: argument where the choices begin
    :return: only the choices for each question.
    """
    for i in range(len(list)):
        if list[i][0:2]==x:
            temp = []
            for y in range(i,-1,-1):
                temp.append(list[y])
                if list[y][0:2] == 'A.':
                    return (temp)
def reverse(list):
    """

    :param list: list to reverse
    :return: anotherList: list with all elements reversed
    """
    anotherList = []
    for i in range(len(list)-1,-1,-1):
        anotherList.append(list[i])
    return anotherList
def iterator(list, method):
    """

    :param list: list to perform method on
    :param method: method to perform, performs method on each element of list
    :return: anotherList: list with each of the element that has the method done on
    """
    anotherList = []
    for i in range(len(list)):
        temp = method(list[i])
        anotherList.append(temp)
    return (anotherList)
def joiner(list):
    """

    :param list: just a list with elements
    :return: fullThing: combines all element of list in one string and returns it.
    """
    fullThing = ""
    for i in range(len(list)):
        fullThing += str(list[i])
    return fullThing