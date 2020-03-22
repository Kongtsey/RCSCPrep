def remover(list,x):
    """
    :param list: the list you want to remove stuff out of
    :param x: the element you want to remove
    :return: list without any x elements
    """
    while x in list:
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
        if list[i][0:2]==x:
            temp = []
            for y in range(i,-1,-1):
                temp.append(list[y])
                try:
                    if(int(list[y][0:2])==qNum):
                        anotherList.append(temp)
                        qNum+=1
                        temp = []
                        break
                except:
                    pass
    return (anotherList)
def finder2(list,x,qNum):
    """

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
                        return (temp)
                except:
                    pass
def finder3(list,x):
    """

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