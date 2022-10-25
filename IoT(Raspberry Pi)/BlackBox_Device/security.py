import os
from cryptography.fernet import Fernet
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding


class MiliboxEncrypter:
    FORMAT_SIGNATURE = b'This is a recorded video file encrypted on MILIBOX.'
    KEY_BEGIN = b'\n-----BEGIN ENCRYPTED SYMMETRIC KEY-----\n'
    KEY_END = b'\n-----END ENCRYPTED SYMMETRIC KEY-----\n'
    MILITARY_UNIT_CODE_BEGIN = b'\n-----BEGIN ENCRYPTED MILITARY UNIT CODE-----\n'
    MILITARY_UNIT_CODE_END = b'\n-----END ENCRYPTED MILITARY UNIT CODE BEGIN-----\n'
    RECORD_BEGIN = b'\n-----BEGIN ENCRYPTED RECORDED VIDEO-----\n'

    def __init__(self, public_key_path="public_key.pem") -> None:
        # 서버의 공개키 열기
        with open(public_key_path, "rb") as key_file:
            self.public_key = serialization.load_pem_public_key(
                key_file.read(),
                backend=default_backend()
            )

    def encrypt_file(self, file_path, military_unit_code):
        if os.path.exists('/' + file_path):
            print("파일이 존재하지 않습니다.")
            return False

        # 해당파일을 암호화할 대칭키 생성
        symmetric_key = Fernet.generate_key()
        print(f"symmetric_key: {symmetric_key}")
        f = Fernet(symmetric_key)

        # 영상파일 열기
        with open(file_path, 'rb') as file:
            content = file.read()
        
        # 영상 암호화에 사용한 대칭키를 공개키로 암호화
        encrypted_symmetric_key = self.public_key.encrypt(
            symmetric_key,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )

        # 부대코드, 영상파일 암호화
        encrypted_military_unit_code = f.encrypt(bytes(military_unit_code, 'utf-8'))
        encrypted_content = f.encrypt(content)
        
        with open(file_path + '.milibox', 'wb') as encrypted_file:
            encrypted_file.write(MiliboxEncrypter.FORMAT_SIGNATURE)
            encrypted_file.write(MiliboxEncrypter.KEY_BEGIN)
            encrypted_file.write(encrypted_symmetric_key)
            encrypted_file.write(MiliboxEncrypter.KEY_END)
            encrypted_file.write(MiliboxEncrypter.MILITARY_UNIT_CODE_BEGIN)
            encrypted_file.write(encrypted_military_unit_code)
            encrypted_file.write(MiliboxEncrypter.MILITARY_UNIT_CODE_END)
            encrypted_file.write(MiliboxEncrypter.RECORD_BEGIN)
            encrypted_file.write(encrypted_content)

        # 영상 파일 삭제
        os.remove(file_path)
        
        return True
        