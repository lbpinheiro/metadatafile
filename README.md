# File Metadata 

File Metada Microservice @FreeCodeCamp, required for Back End Developer Certification.

This is a A [FreeCodeCamp](https://www.freecodecamp.com/challenges/file-metadata-microservice) exercice.

## API Documentation

Route                 | Method | Description
----------------------|--------|------------
https://metadatafile.herokuapp.com/api         | POST    | Returns a JSON with details of submited files

## Responses

* Smooth run

```javascript
[
  {
    originalName:  [String], //file's name
    size:          [Number], //file's size (in bytes)
  }
]
```

* If something went wrong
```javascript
{
  error:          [String]  //error description
}
```

## Example

Please visit the (test page)[https://metadatafile.herokuapp.com/]

## Author

**Lucas Batochi Pinheiro**

## License

Copyright (c) 2016,
Lucas B. Pinheiro pinheiro.lucas@gmail.com

Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.