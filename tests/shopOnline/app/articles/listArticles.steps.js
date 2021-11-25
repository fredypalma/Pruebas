import '@testing-library/jest-dom';
import {defineFeature, loadFeature} from "jest-cucumber";
import {render, screen, waitFor} from "@testing-library/react";
import React from 'react';
import userEvent from "@testing-library/user-event";

import Home from "../../../../src/shopOnline/app/components/home/Home";

const feature = loadFeature('./tests/shopOnline/app/articles/features/listArticles.feature');

defineFeature(feature, test => {

    describe('Mostrando la pagina HOME', () => {
        test('listar productos', ({given, when, then}) => {
            let title = null;
            let products = null;

            given('el cliente conoce la direccion de la pagina', () => {
                render(<Home/>);
            });

            when('ingresa a la pagina principal', () => {
                // title = screen.findByText(/¿Qué deseas comprar hoy?/i);
                // console.log(title);
                // products = screen.findByText(/Recomendados/i);
            });


            then('el sistema muestra la lista de productos destacados', () => {
                expect(screen.getByText(/¿Qué deseas comprar hoy?/i)).toBeInTheDocument();
                // expect(products).toBeInTheDocument();
            });
        });
    });


});