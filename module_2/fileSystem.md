1. Создать в домашней директории директорию homeWork2

	$ mkdir homeWork2

2. Создать файл index.html внутри директории homeWork2

	$ cd homeWork2
	$ touch index.html

3. Создать внутри директории homeWork2 директорию content

	$ mkdir content

4. Скопировать файл index.html в директорию content

	$ cp index.html content/index.html
 
5. Создать внутри директории homeWork2 директорию newContent

	$ mkdir newContent

6. Переместить файл index.html из директории content в директорию newContent

	$ cd content
	$ mv index.html ../newContent/index.html

7. Удалить директорию content

	$ cd ../homeWork2
	$ rm -r content

8. Переименовать файл index.html на newIndex.html

	$ mv index.html newIndex.html

9. Изменить права доступа для файла newIndex.html: Только пользователь имеет право читать 
записывать и выполнять, группа имеет только права на чтение, а остальные не имеют никаких прав

	$ chmod 740 newIndex.html 
