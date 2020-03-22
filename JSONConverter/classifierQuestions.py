def remover(list,x):
    while x in list:
        list.remove(x)
    return list
def finder(list,x,qNum):
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
    anotherList = []
    for i in range(len(list)):
        if list[i][0:2]==x:
            temp = []
            for y in range(i-1,-1,-1):
                temp.append(list[y])
                try:
                    if(int(list[y][0:2])==qNum):
                        int(list[y][0:2])
                        anotherList.append(temp)
                        qNum+=1
                        return (temp,True)
                except:
                    pass
def finder3(list,x):
    anotherList = []
    for i in range(len(list)):
        if list[i][0:2]==x:
            temp = []
            for y in range(i,-1,-1):
                temp.append(list[y])
                if list[y][0:2] == 'A.':
                    anotherList.append(temp)
                    return (temp)
def reverse(list):
    anotherList = []
    for i in range(len(list)-1,-1,-1):
        anotherList.append(list[i])
    return anotherList
def iterator(list, method):
    anotherList = []
    for i in range(len(list)):
        temp = method(list[i])
        anotherList.append(temp)
    return (anotherList)
def joiner(list):
    fullThing = ""
    for i in range(len(list)):
        fullThing += str(list[i])
    return fullThing