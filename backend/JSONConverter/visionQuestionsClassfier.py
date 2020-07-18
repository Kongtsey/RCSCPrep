import classifierQuestions as cq
def finder(list,x):
    """
    :param list: list with all of the text of the questions
    :param x: What character to find
    :return: anotherList: returns list with only question and choices as elements
    """
    anotherList = []
    for i in range(len(list)):
        wordCheck = list[i].split()
        try:
            if wordCheck[0]==x: #since the options are always "D." thus the first 2 characters are equal to x which is specified by user
                temp = []# empty list to store all elements
                for y in range(i,-1,-1):# we have found "D." so now go back and store everything until we are at the start of the question
                    broken = list[y].split()#because of the spaces and tabs present we arent able to directly compare using indices
                    temp.append(list[y])# append all elements that you come across
                    try:
                        if(int(broken[0][0])):# since in vision questions the numbers are outta place we first need to see if the first letter is even a number.
                            # print("broken[0][0]", broken[0][0])
                            try:
                                if(int(broken[0][0:2])):
                                    # print("broken[0][0:2]",broken[0][0:2])
                                    qNum = broken[0][0:2]+"." # since the question number comes in format of '9.' done in order to not get confused with starting numbers such as '9'
                                    if(broken[0][0:3]==qNum):
                                        # print("broken[0][0:3]",broken[0][0:3])
                                        anotherList.append(temp)
                                        temp = []
                                        break
                            except:
                                qNum = broken[0][0]+"."
                                if(broken[0][0:2]==qNum):
                                    # print("broken[0][0:2]",broken[0][0:2])
                                    anotherList.append(temp)        
                                    temp=[]
                                    break
                    except:
                        pass
        except:
            pass
    return (anotherList)
def extractQuestions(list,x):
    """
    function to get only the questions and returns them
    :param list: list with all of the questions and choices
    :param x: argument where the question ends
    :return: temp: just the question concerned with the qNum
    """
    for i in range(len(list)):
        wordCheck = list[i].split()
        condition = False
        try:
            if wordCheck[0]==x:
                temp = []
                for y in range(i-1,-1,-1):
                    broken = list[y].split()
                    temp.append(list[y])
                    try:
                        # if (broken[0][0:2]==str(qNum)+"." or broken[0][0:2] == str(qNum)): # questions in quantitative part range from 51 to 75 the first condition is for numbers from 1 to 9
                        if(int(broken[0][0])):
                            try:
                                if(int(broken[0][0:2])):
                                    questionNumber = broken[0][0:2]+"."
                                    if(broken[0][0:3]==questionNumber):
                                        condition=True
                            except:
                                questionNumber=broken[0][0]+"."
                                if(broken[0][0:2]==questionNumber):
                                    condition=True
                        if(condition==True):
                            temp = cq.reverse(temp)# reverse the orders
                            temp = cq.joiner(temp)# combine them all together
                            temp = temp.split()# need to split in order to remove the question number
                            temp = temp[1:]# Remove question number
                            temp = cq.joiner(temp)# join them back all together
                            condition = False
                            return (temp)
                    except:
                        pass
        except:
            pass