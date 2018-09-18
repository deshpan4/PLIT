import test from 'ava' ;

import {
	IndexError ,
	KeyError ,
	NotImplementedError ,
	TypeError ,
	ValueError ,
} from '../../src' ;

test( 'error' , t => {

	const r = Math.random();
	const s = r.toString();

	t.truthy( new IndexError( ) ) ;
	t.truthy( new KeyError( ) ) ;
	t.truthy( new NotImplementedError( ) ) ;
	t.truthy( new TypeError( ) ) ;
	t.truthy( new ValueError( ) ) ;

	t.is( ( new IndexError( r ) ).message , s ) ;
	t.is( ( new KeyError( r ) ).message , s ) ;
	t.is( ( new NotImplementedError( r ) ).message , s ) ;
	t.is( ( new TypeError( r ) ).message , s ) ;
	t.is( ( new ValueError( r ) ).message , s ) ;

}) ;
