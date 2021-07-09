#include <iostream>
#include <string>
 
class IVertexOperation {
 	public:
	virtual void* operate() = 0; // обратите внимание, speak() является чистой виртуальной функцией
	virtual ~IVertexOperation() {}; // создаем виртуальный деструктор, чтобы вызывался соответствующий деструктор дочернего класса в случае, если удалим указатель на IErrorLog
};