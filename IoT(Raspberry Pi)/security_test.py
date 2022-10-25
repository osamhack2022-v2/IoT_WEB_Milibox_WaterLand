from BlackBox_Device.security import *
from server import *

make_key()
encrypter = MiliboxEncrypter()
encrypter.encrypt_file('test', "계룡대")

#decrypt_file('test')
#file_path = 'test'
#if os.path.exists('/' + file_path):
#    print("파일이 존재하지 않습니다.")
