# TRC-20 AUTOMINTER

Autominter for trc-20 inscriptions

paste your private key to
`const privateKey = "<here>";`

enter inscription data such as
</br>
`const memo = 'data:,{"p":"trc-20","op":"mint","tick":"pepe","amt":"1000"}';`

Run following commands

`npm i`
</br>
`node minter.js`

## You can edit frequency here

Set default to 3 seconds
setInterval(main, 3000);
