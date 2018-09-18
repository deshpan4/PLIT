import {
	Deque ,
	ArbitrarySizeDeque ,
	UnboundedDeque ,
	BoundedDeque ,
	SingleElementDeque ,
	EmptyDeque ,
} from './implementation' ;

import _deque from './_deque' ;

const deque = _deque( UnboundedDeque , BoundedDeque , SingleElementDeque , EmptyDeque ) ;

export default deque ;
