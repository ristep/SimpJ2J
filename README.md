# SimpJ2J [![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/ristep/SimpJ2J?label=ver&sort=semver)](https://github.com/ristep/SimpJ2J/tags) [![GitHub](https://img.shields.io/github/license/ristep/SimpJ2J)](https://github.com/ristep/SimpJ2J/blob/master/LICENSE)

## Simple JSON to SQL to JSON single point API writhen with PHP and PDO

I started this project some time ago just for testing purposes. It was meant to be used in my ReactJS experiments. But I think is quite useful for small projects and not so small project.

Do it simple bro is the main motto in this project, all other API for remote db access are to complex for my taste.

Anyway now is completely open an anyone can use it as he whish.

## Getting Started

Just download or clone this repo on jour LAMP server and compose :)

Write on command prompt

>
>composer
>

composer will download "firebase/php-jwt" in /vendor folder.

## Prerequisites

MySQL, PHP with PDO enabled on an apache2 webserver. Probably will work on eny http sever with PHP but is not tested, yet.

Full source code for testing app can be found here ong github [ristep/SimpJ2J-react-test](https://github.com/ristep/SimpJ2J-react-test)

## Using

Just send post request whit JSON encoded Data

```js
// Example request JSON
{
  sqlStatement: 'select',
  table: 'foods',
  fields: [
    'id',
    'name'
  ],
  keyData: {
    id: 980
  }
}
```

this will be transformed in to SQL statement:

```SQL
SELECT id,name FROM foods WHERE id='980' ;
```

and if everything is OK service will return something like this

```json
{
  "OK": true,
  "error": false,
  "message": " successfully!",
  "SQL": "SELECT id,name FROM foods WHERE id='980'  ;",
  "count": 1,
  "data": [
    {
      "id": 980,
      "name": "Updated food name"
    }
  ]
}
```

## Examples

For live example go to this link:

>
<!-- > [llc-test.sman.cloud](https://llc-test.sman.cloud/){:target="_blank"} -->
> <a href="https://llc-test.sman.cloud/" target="_blank">llc-test.sman.cloud</a>
>

## Built With

* [PHP](https://www.php.net/) - PHP is a popular general-purpose scripting language that is especially suited to web development.
* [PDO](https://www.php.net/manual/en/book.pdo.php) - PHP Data Objects
* [php-jwt](https://github.com/firebase/php-jwt) - A simple library to encode and decode JSON Web Tokens (JWT) in PHP, conforming to RFC 7519.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ristep/SimpJ2J/tags).

## Author

[Riste Panovski](https://github.com/ristep)
