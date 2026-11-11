<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ztril

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy the lower triangular part of a double-precision complex floating-point matrix `A` to another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import ztril from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-ztril@esm/index.mjs';
```

#### ztril( arrays )

Copies the lower triangular part of a double-precision complex floating-point matrix `A` to another matrix `B`.

<!-- eslint-disable max-len -->

```javascript
import Complex128Matrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-matrix-complex128@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';

var A = new Complex128Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
var B = new Complex128Matrix( [ [ 0.0, 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0, 0.0 ] ] );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = ztril( [ A, B, k ] );
// returns <ndarray>[ [ <Complex128>[ 1.0, 2.0 ], <Complex128>[ 0.0, 0.0 ] ], [ <Complex128>[ 5.0, 6.0 ], <Complex128>[ 7.0, 8.0 ] ] ]

var bool = ( out === B );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a two-dimensional input ndarray corresponding to `A`.
    -   a two-dimensional output ndarray corresponding to `B`.
    -   a zero-dimensional ndarray specifying the diagonal above which to ignore. A value equal to zero refers to the main diagonal, greater than zero refers to a diagonal above the main diagonal, and less than zero refers to a diagonal below the main diagonal.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the copied region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import Complex128Matrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-matrix-complex128@esm/index.mjs';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import ztril from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-ztril@esm/index.mjs';

var opts = {
    'dtype': 'float64'
};

var A = new Complex128Matrix( discreteUniform( 5*5*2, -50, 50, opts ).buffer, 0, 5, 5 );
console.log( ndarray2array( A ) );

var B = new Complex128Matrix( discreteUniform( 5*5*2, -50, 50, opts ).buffer, 0, 5, 5 );
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var out = ztril( [ A, B, k ] );
console.log( ndarray2array( out ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-ztril.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-ztril

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-ztril/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-ztril?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-ztril.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-ztril/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-ztril/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-ztril/main/LICENSE

</section>

<!-- /.links -->
