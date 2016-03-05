import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
    
    /**
     * Simple test for `increment` function.
     */
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect (nextState).to.equal(43);    //Chai notation: expect
            expect (state).to.equal(42);
        });
    });

    /**
     * Simple test for appending to a immutable `List`.
     */
    describe('A List', () => {
        
        /**
         *
         */
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equals(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));

            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });

    });

    describe('a tree', () => {
        
        function addMovie(currentState, movie) {
            return currentState.update('movies',
                movies => movies.push(movie));
        }

        it('is immutable', () => {
            let state = Map({
                movies : List.of('Trainspotting', '28 Days Later')
            });

            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));

            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });

    });

});
