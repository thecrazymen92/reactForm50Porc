import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import { MyField } from "./MyField";
import fondo from './img/Base.png';

const initialValues: Values = {
    firstName: "", lastName: "", email: "", paso: 0, 
	arr: [/*steps-config*//*"display":"none"*/
	{/*campo 1*//*paso 1*//*1->N*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{/*8*/lbl1: {}}]
	},
	{/*2*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*3*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*4*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*5*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*6*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*7*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*8*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*9*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*10*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	},
	{/*11*/
		lbl1: [{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}},{lbl1: {}}]
	}]
};

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  paso: number;
    arr: Array<{
		lbl1: Array<{lbl1:{};}>;
    }>;
}
export interface Stl {
	[index:number]:Array<{
		propi:string;
		valor:string;
		}>;
	}
/*
interface defItem {
  [index: string]: defItemDeta;
}
interface defItemDeta {
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  label6: string;
  label7: string;
  label8: string;
  label9: string;
  label10: string;
  label11: string;
}*/

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
	const estilo1 = {
    };
/*	const fondoIMG= {
		color: "white",
		"max-width": "90vw",
		"max-height": "90vh",
		width: "90%",
		"z-index": "-1"
    };*/
	const leftContainer= {
		color: "white",
		"font-size":"10px",
		"backgroundImage":`url(${require(`./img/Base.png`)})`,
		"background-repeat": "no-repeat",
		"background-size": "80% 90%",
		height: "90vh",
		display:"block"
    };
	const pCajaLeft= {
		"max-height": "20px",
		width:"80%",
		color: "white",
		"z-index": "1",
		margin:"0",
		left:"10%",
		"text-align":"left"
		
    };
	
	const cajaInput= {
    margin: "0",
    border: "0",
    display: "inline-flex",
    padding: "0",
    "min-width": "0",
    "flex-direction": "column",
    "vertical-align": "top"};
	const cajaInputInterior= {
color: "rgba(0, 0, 0, 0.87)",
    cursor: "text",
    display: "inline-flex",
    "font-size": "1rem",
    "font-family": '"Roboto", "Helvetica", "Arial", sans-serif',
    "line-height": "1.1875em",
    "align-items": "center"};
	const cajaInput__input= {
    font: "inherit",
    color: "currentColor",
    width: "100%",
    border: "0",
    margin: "0",
    padding: "6px 0 7px",
    display: "block",
    "min-width": "0",
    "box-sizing": "content-box",
    "background": "none"
	};
	const cajaInput__inputModificado= {
    display: "contents"
	};
	const cajaInput__inputFull= {
    width: "100%"
	};
  return (
  <div className="Row">
  <div className="col s12" >
  <div className="Col S6">
  <Grid container >
  <Grid container item xs={1}>
  </Grid>
  
  <Grid container item xs={10}>
  <Grid container style={leftContainer} item xs={7}>
  
<p style={pCajaLeft} >Seguro de </p>
  <p style={pCajaLeft}>Salud</p>
  <p style={pCajaLeft}></p>
  <p style={pCajaLeft}>compralo de manera fácil y rápida</p>
  <p style={pCajaLeft}>Cotiza y compra tu seguro 100% digital</p>
  <p style={pCajaLeft}>Hasta S/. 12 millones de cobertura anual</p>
  <p style={pCajaLeft}>Mas de 300 clínicas en todo el Perú</p>
  <Grid container item xs={1}>
  </Grid>
  </Grid>
  <Grid container item xs={3}>
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values }) => (              
        <Form>
			<div>
				Obtén tu <div>seguro ahora</div>
			</div>
			<div>
				ingresa los datos para comenzar
			</div>
          <div style={values.arr[0].lbl1[values.paso].lbl1}>
			  <div style={cajaInput}>
				<div style={cajaInputInterior}>
					<select style={cajaInput__input}>
					<option value="1">DNI</option>
					<option value="2">RUC</option>
					<option value="3">CDE</option>
					</select>
				</div>
			  </div>
		  </div>
			<div style={values.arr[1].lbl1[values.paso].lbl1}>
			<div style={cajaInput__inputModificado}>
				<Field
				  name="documento"
				  placeholder="Nro de documento"
				  component={MyField}
				/>
			</div>
			</div>
			<div style={values.arr[2].lbl1[values.paso].lbl1}>
            <Field
              name="firstName"
              placeholder="firsts name"
              style={cajaInput__inputFull}
              component={MyField}
            />
          </div>
          <div style={values.arr[3].lbl1[values.paso].lbl1}>
            <Field
              name="lastName"
              placeholder="last name"
              style={cajaInput__inputFull}
              component={MyField}
            />
          </div>
          <div style={values.arr[4].lbl1[values.paso].lbl1}>
            <Field name="email" 
			  placeholder="email" 
              style={cajaInput__inputFull}
              component={MyField} />
          </div>
          <div style={values.arr[5].lbl1[values.paso].lbl1}>
            <Field name="paso" 
			  placeholder="paso" 
              style={cajaInput__inputFull}
              component={MyField} />
          </div>
          <Button type="submit">submit</Button>
          
        </Form>
      )}
    </Formik>
  <Grid container item xs={1}>
  </Grid>
  </Grid>
  <Grid container item xs={1}>
  </Grid>
</Grid>
  </Grid>
  </div>
	</div>
  </div>
  );
};
