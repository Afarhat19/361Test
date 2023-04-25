import time

import os

_, _, files = next(os.walk("images"))
file_count = len(files)
print(file_count)

while True:
    openfile = open('image-service.txt', 'r+')
    read = openfile.readline()
    if read.isnumeric():
        time.sleep(5) # changed this from 1
        newnumber = int(read)
        if newnumber >= file_count:
            newnumber = newnumber % file_count
            if newnumber == 0:
                newnumber = 1
        openfile.close()
        imagepath = f'C:/Users/amirz/Documents/361/Assignment2/images/{newnumber}.jpg'
        writetofile = open('image-service.txt', 'w')
        writetofile.write(f"{imagepath}")
        writetofile.close()

