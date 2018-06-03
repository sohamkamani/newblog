import os
import string
from shutil import copyfile

ob = "/Users/soham/Documents/sohamkamani.github.io/_posts"
nb = "/Users/soham/go/src/github.com/sohamkamani/my-gatsby-blog/src/pages"

file_names = [
    "2015-08-21-python-nodejs-comm.md",
    "2015-08-25-frontend.md",
    "2016-04-09-stop-using-gifs.md",
    "2016-06-14-what-snapchat-did-right.md",
    "2016-06-30-docker-mongo-replica-set.md",
    "2016-07-07-a-beginners-guide-to-sql.md",
    "2016-09-11-we-should-use-emojis-more.md",
    "2016-09-21-making-a-telegram-bot.md",
    "2016-10-06-uuid1-vs-uuid4.md",
    "2017-03-09-sync-data-between-google-sheets-and-firebase.md",
    "2017-09-10-random-line-generation.md"
]

folder_names = [
    "golang",
    "javascript",
    "kafka",
    "react",
    "statistical-learning",
    "tensorflow",
    "web-security"
]

# for file_name in file_names:
#     folder_name = string.split(file_name, sep=".")[0]
#     folder_path = nb + "/" + folder_name
#     os.mkdir(nb + "/" + folder_name)
#     copyfile(ob + "/" + file_name, folder_path + "/index.md")

for folder_name in folder_names:
    files = os.listdir(ob + "/" + folder_name)
    os.mkdir(nb + "/" + folder_name)
    for file_name in files:
        inner_folder_name = string.split(file_name, sep=".")[0]
        folder_path = nb + "/" + folder_name + "/" + inner_folder_name
        os.mkdir(folder_path)
        copyfile(ob + "/" + folder_name + "/" +
                 file_name, folder_path + "/index.md")
