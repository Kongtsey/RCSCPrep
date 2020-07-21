import os

def detect_text(path):
    """Detects text in the file."""
    from google.cloud import vision
    import io
    print("Calling the api.")
    client = vision.ImageAnnotatorClient()
    with io.open(path, 'rb') as image_file:
        content = image_file.read()
    image = vision.types.Image(content=content)
    print("Extracting text from", path)
    response = client.document_text_detection(image=image) #.document_text_detection for detecting clustered docs.
    texts = response.text_annotations #get the text
    file = open("backend/tesseract/visionQuestions/questionV2.txt","a")
    textToWrite = texts[0].description #since api returns a dic where the first element is the text as a whole and other elements are single words
    # also .description since it also stores bounds and other variables in json format and description is the actual text
    file.write(textToWrite)
    file.close
    print("Text extracted and saved to visionQuestions/question.txt")
    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))

directory = "backend/tesseract/pictures"
pictures = []
for fileName in os.listdir(directory):
    if(fileName.endswith(".JPG")):
        pictures.append(fileName)
for eachPic in pictures:
    image = "backend/tesseract/pictures/"
    image+=eachPic
    print("Processing:",image,"currently. . .")
    detect_text(image)