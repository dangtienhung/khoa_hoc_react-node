b1: npm init -y
-> tạo ra package.json

b2: npm i (hoặc là npm install)
-> cài node_modules

b3: tạo ra 1 thư mục src
b4: tạo ra 1 file app.js trong thư mục src/
b5: cài đặt thư viện express và nodemon
-> npm i express
-> npm i nodemon

b6: vào file package.json
-> "type": "module",
-> trong phần "start" mình sẽ cài đặt câu lệnh là
"start": "nodemon ./src/app.js"

b7: vào file app.js và dán vào

import express from 'express'
const app = express()
app.get('/ahihi', function (req, res) {
console.log('first')
console.log('first')
res.send('Hello World')

})
app.listen(5000)

b8: chạy dự án
-> npm start hoặc là npm run start
