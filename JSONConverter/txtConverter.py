import PyPDF2
def extractText(numPages,pdfObj):
    """
    Function to extract all of the text from a pdf.
    :param numPages: number of pages of pdf
    :param pdfObj: the object of PyPDF you want to do operations on
    :return: text: all text from the pdf
    """
    text = ""
    for i in range(numPages):
        pageObj = pdfObj.getPage(i)
        pageContent = pageObj.extractText()# extract text for each page
        text+=pageContent# accumulate it in text
    return text
year = input("What year is the paper from?\n")
pdf = PyPDF2.PdfFileReader("PastPapers/BCSE-"+year+"-PE.pdf")# create object of PyPDF
numPages = pdf.getNumPages() # get number of pages in the pdf
txtFile = open("PastPapers/BCSE-"+year+"-PE.txt",'w') # create txt file to be stored in
pdfText = extractText(numPages,pdf)
txtFile.write(pdfText)
txtFile.close()