1. ������� � �������� ���������� ���������� homeWork2

	$ mkdir homeWork2

2. ������� ���� index.html ������ ���������� homeWork2

	$ cd homeWork2
	$ touch index.html

3. ������� ������ ���������� homeWork2 ���������� content

	$ mkdir content

4. ����������� ���� index.html � ���������� content

	$ cp index.html content/index.html
 
5. ������� ������ ���������� homeWork2 ���������� newContent

	$ mkdir newContent

6. ����������� ���� index.html �� ���������� content � ���������� newContent

	$ cd content
	$ mv index.html ../newContent/index.html

7. ������� ���������� content

	$ cd ../homeWork2
	$ rm -r content

8. ������������� ���� index.html �� newIndex.html

	$ mv index.html newIndex.html

9. �������� ����� ������� ��� ����� newIndex.html: ������ ������������ ����� ����� ������ 
���������� � ���������, ������ ����� ������ ����� �� ������, � ��������� �� ����� ������� ����

	$ chmod 740 newIndex.html 
