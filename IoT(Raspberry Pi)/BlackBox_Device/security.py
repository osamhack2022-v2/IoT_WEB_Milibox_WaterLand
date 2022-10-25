import os
from cryptography.fernet import Fernet
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding


def encrypt_file(file_path):
    if os.path.exists('/' + file_path):
        print("파일이 존재하지 않습니다.")
        return False

    # 해당파일을 암호화할 대칭키 생성
    symmetric_key = Fernet.generate_key()
    print(f"symmetric_key: {symmetric_key}")
    f = Fernet(symmetric_key)

    # 영상파일 열기
    with open(file_path, 'rb') as file:
        original = file.read()
    
    # 서버의 공개키 열기
    with open("public_key.pem", "rb") as key_file:
        public_key = serialization.load_pem_public_key(
            key_file.read(),
            backend=default_backend()
        )
  
    # 영상 암호화에 사용한 대칭키를 공개키로 암호화
    encrypted_symmetric_key = public_key.encrypt(
        symmetric_key,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None
        )
    )

    # 영상파일 암호화
    encrypted_content = f.encrypt(original)
    
    with open(file_path + '.milibox', 'wb') as encrypted_file:
        encrypted_file.write(b'This is a recorded video file encrypted on MILIBOX.\n')
        encrypted_file.write(b'-----BEGIN ENCRYPTED SYMMETRIC KEY-----\n')
        encrypted_file.write(encrypted_symmetric_key)
        encrypted_file.write(b'\n-----END ENCRYPTED SYMMETRIC KEY-----\n')
        encrypted_file.write(encrypted_content)

    # 영상 파일 삭제
    os.remove(file_path)
    
    return True
    