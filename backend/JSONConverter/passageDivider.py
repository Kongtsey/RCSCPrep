def englishPassageSplit(content):
    copy = False # variable to check if we are still in the bounds of the passage question.
    content = content.split("\n") #split to a new line
    passage = "" #accumulator variable
    i=0
    for eachLine in content:
        words = eachLine.split()# split the words in order to find the identifier
        try:# using try and except since while checking for page we have to int a var.
            # print(words[0]+words[1])
            if(words[0]+words[1]=="PartI:"): #identifier to see if passage has started
                copy = True
            if((words[0]=="Page" and int(words[1])) or(words[0]=="BCSE"and int(words[1]))): #identifier to see if passage has ended
                continue
            if(int(words[0][0:2])): #identifier to see if passage has ended
                copy = False
                return (passage)
        except:
            if(copy==True):
                passage += eachLine + "\n"