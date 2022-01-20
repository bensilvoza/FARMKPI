

import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import PouchDB from "pouchdb"
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';


function Create() {
	
	// ACCORDION
	var [farm, setFarm] = useState("")
	function handleFarm(e){
		setFarm(e.target.value)
	}
	
	var [location, setLocation] = useState("")
	function handleLocation(e){
		setLocation(e.target.value)
	}
	
	var [date, setDate] = useState("")
	function handleDate(e){
		setDate(e.target.value)
	}
	
	var [week, setWeek] = useState("")
	function handleWeek(e){
		setWeek(e.target.value)
	}
	// ==============
	// end, accordion
	// ==============
	
	
	// ===========
	// BUD BAGGING
	// ===========
	var [bbTotalSamplesQ1, setbbTotalSamplesQ1] = useState("")
	var [bbTotalSamplesQ2, setbbTotalSamplesQ2] = useState("")
	var [bbTotalSamplesQ3, setbbTotalSamplesQ3] = useState("")
	var [bbTotalSamplesQ4, setbbTotalSamplesQ4] = useState("")
	function handlebbTotalSamplesQ1(e){
		setbbTotalSamplesQ1(e.target.value)
	}
	function handlebbTotalSamplesQ2(e){
		setbbTotalSamplesQ2(e.target.value)
	}
	function handlebbTotalSamplesQ3(e){
		setbbTotalSamplesQ3(e.target.value)
	}
	function handlebbTotalSamplesQ4(e){
		setbbTotalSamplesQ4(e.target.value)
	}
	var bbTotalSamples = Number(bbTotalSamplesQ1) + Number(bbTotalSamplesQ2) + Number(bbTotalSamplesQ3) + Number(bbTotalSamplesQ4)
	
	var [bbLateInstallationQ1, setbbLateInstallationQ1] = useState("")
	var [bbLateInstallationQ2, setbbLateInstallationQ2] = useState("")
	var [bbLateInstallationQ3, setbbLateInstallationQ3] = useState("")
	var [bbLateInstallationQ4, setbbLateInstallationQ4] = useState("")
	function handlebbLateInstallationQ1(e){
		setbbLateInstallationQ1(e.target.value)
	}
	function handlebbLateInstallationQ2(e){
		setbbLateInstallationQ2(e.target.value)
	}
	function handlebbLateInstallationQ3(e){
		setbbLateInstallationQ3(e.target.value)
	}
	function handlebbLateInstallationQ4(e){
		setbbLateInstallationQ4(e.target.value)
	}
	var bbLateInstallation = (1 - (Number(bbLateInstallationQ1) + Number(bbLateInstallationQ2) + Number(bbLateInstallationQ3) + Number(bbLateInstallationQ4))  / bbTotalSamples) * 25    
	
	var [bbMissOutQ1, setbbMissOutQ1] = useState("")
	var [bbMissOutQ2, setbbMissOutQ2] = useState("")
	var [bbMissOutQ3, setbbMissOutQ3] = useState("")
	var [bbMissOutQ4, setbbMissOutQ4] = useState("")
	function handlebbMissOutQ1(e){
		setbbMissOutQ1(e.target.value)
	}
	function handlebbMissOutQ2(e){
		setbbMissOutQ2(e.target.value)
	}
	function handlebbMissOutQ3(e){
		setbbMissOutQ3(e.target.value)
	}
	function handlebbMissOutQ4(e){
		setbbMissOutQ4(e.target.value)
	}
	var bbMissOut = (1 - (Number(bbMissOutQ1) + Number(bbMissOutQ2) + Number(bbMissOutQ3) + Number(bbMissOutQ4))  / bbTotalSamples) * 25
	
	var [bbLateRetrievalQ1, setbbLateRetrievalQ1] = useState("")
	var [bbLateRetrievalQ2, setbbLateRetrievalQ2] = useState("")
	var [bbLateRetrievalQ3, setbbLateRetrievalQ3] = useState("")
	var [bbLateRetrievalQ4, setbbLateRetrievalQ4] = useState("")
	function handlebbLateRetrievalQ1(e){
		setbbLateRetrievalQ1(e.target.value)
	}
	function handlebbLateRetrievalQ2(e){
		setbbLateRetrievalQ2(e.target.value)
	}
	function handlebbLateRetrievalQ3(e){
		setbbLateRetrievalQ3(e.target.value)
	}
	function handlebbLateRetrievalQ4(e){
		setbbLateRetrievalQ4(e.target.value)
	}
	var bbLateRetrieval = (1 - (Number(bbLateRetrievalQ1)+Number(bbLateRetrievalQ2)+Number(bbLateRetrievalQ3)+Number(bbLateRetrievalQ4)) / bbTotalSamples) * 30

	
	var [bbImproperInstallQ1, setbbImproperInstallQ1] = useState("")
	var [bbImproperInstallQ2, setbbImproperInstallQ2] = useState("")
	var [bbImproperInstallQ3, setbbImproperInstallQ3] = useState("")
	var [bbImproperInstallQ4, setbbImproperInstallQ4] = useState("")
	function handlebbImproperInstallQ1(e){
		setbbImproperInstallQ1(e.target.value)
	}
	function handlebbImproperInstallQ2(e){
		setbbImproperInstallQ2(e.target.value)
	}
	function handlebbImproperInstallQ3(e){
		setbbImproperInstallQ3(e.target.value)
	}
	function handlebbImproperInstallQ4(e){
		setbbImproperInstallQ4(e.target.value)
	}
	var bbImproperInstall = (1 - (Number(bbImproperInstallQ1)+Number(bbImproperInstallQ2)+Number(bbImproperInstallQ3)+Number(bbImproperInstallQ4)) / bbTotalSamples) * 10
	
	var [bbNoMarkingQ1, setbbNoMarkingQ1] = useState("")
	var [bbNoMarkingQ2, setbbNoMarkingQ2] = useState("")
	var [bbNoMarkingQ3, setbbNoMarkingQ3] = useState("")
	var [bbNoMarkingQ4, setbbNoMarkingQ4] = useState("")
	function handlebbNoMarkingQ1(e){
		setbbNoMarkingQ1(e.target.value)
	}
	function handlebbNoMarkingQ2(e){
		setbbNoMarkingQ2(e.target.value)
	}
	function handlebbNoMarkingQ3(e){
		setbbNoMarkingQ3(e.target.value)
	}
	function handlebbNoMarkingQ4(e){
		setbbNoMarkingQ4(e.target.value)
	}
	var bbNoMarking = (1 - (Number(bbNoMarkingQ1)+Number(bbNoMarkingQ2)+Number(bbNoMarkingQ3)+Number(bbNoMarkingQ4)) / bbTotalSamples) * 10
	
	// ================
	// END, BUD BAGGING
	// ================
	
	
	// ================
	// PROPPING/ GUYING
	// ================
	var [pgTotalSamplesQ1, setpgTotalSamplesQ1] = useState("")
	var [pgTotalSamplesQ2, setpgTotalSamplesQ2] = useState("")
	var [pgTotalSamplesQ3, setpgTotalSamplesQ3] = useState("")
	var [pgTotalSamplesQ4, setpgTotalSamplesQ4] = useState("")
	function handlepgTotalSamplesQ1(e){
		setpgTotalSamplesQ1(e.target.value)
	}
	function handlepgTotalSamplesQ2(e){
		setpgTotalSamplesQ2(e.target.value)
	}
	function handlepgTotalSamplesQ3(e){
		setpgTotalSamplesQ3(e.target.value)
	}
	function handlepgTotalSamplesQ4(e){
		setpgTotalSamplesQ4(e.target.value)
	}
	var pgTotalSamples = Number(pgTotalSamplesQ1) + Number(pgTotalSamplesQ2) + Number(pgTotalSamplesQ3) + Number(pgTotalSamplesQ4)
	
	
	var [pgLateQ1, setpgLateQ1] = useState("")
	var [pgLateQ2, setpgLateQ2] = useState("")
	var [pgLateQ3, setpgLateQ3] = useState("")
	var [pgLateQ4, setpgLateQ4] = useState("")
	function handlepgLateQ1(e){
		setpgLateQ1(e.target.value)
	}
	function handlepgLateQ2(e){
		setpgLateQ2(e.target.value)
	}
	function handlepgLateQ3(e){
		setpgLateQ3(e.target.value)
	}
	function handlepgLateQ4(e){
		setpgLateQ4(e.target.value)
	}
	var pgLate = (1 - (Number(pgLateQ1) + Number(pgLateQ2) + Number(pgLateQ3) + Number(pgLateQ4)) / pgTotalSamples) * 30
	
	
	var [pgMissoutQ1, setpgMissoutQ1] = useState("")
	var [pgMissoutQ2, setpgMissoutQ2] = useState("")
	var [pgMissoutQ3, setpgMissoutQ3] = useState("")
	var [pgMissoutQ4, setpgMissoutQ4] = useState("")
	function handlepgMissoutQ1(e){
		setpgMissoutQ1(e.target.value)
	}
	function handlepgMissoutQ2(e){
		setpgMissoutQ2(e.target.value)
	}
	function handlepgMissoutQ3(e){
		setpgMissoutQ3(e.target.value)
	}
	function handlepgMissoutQ4(e){
		setpgMissoutQ4(e.target.value)
	}
	var pgMissout = (1 - (Number(pgMissoutQ1) + Number(pgMissoutQ2) + Number(pgMissoutQ3) + Number(pgMissoutQ4)) / pgTotalSamples) * 30
	
	
	var [pgImproperQ1, setpgImproperQ1] = useState("")
	var [pgImproperQ2, setpgImproperQ2] = useState("")
	var [pgImproperQ3, setpgImproperQ3] = useState("")
	var [pgImproperQ4, setpgImproperQ4] = useState("")
	function handlepgImproperQ1(e){
		setpgImproperQ1(e.target.value)
	}
	function handlepgImproperQ2(e){
		setpgImproperQ2(e.target.value)
	}
	function handlepgImproperQ3(e){
		setpgImproperQ3(e.target.value)
	}
	function handlepgImproperQ4(e){
		setpgImproperQ4(e.target.value)
	}
	var pgImproper = (1 - (Number(pgImproperQ1) + Number(pgImproperQ2) + Number(pgImproperQ3) + Number(pgImproperQ4)) / pgTotalSamples) * 40      
	// =====================
	// END, PROPPING/ GUYING
	// =====================

	
	// ===========
	// BUNCH SPRAY
	// ===========
	var [bsTotalSamplesQ1, setbsTotalSamplesQ1] = useState("")
	var [bsTotalSamplesQ2, setbsTotalSamplesQ2] = useState("")
	var [bsTotalSamplesQ3, setbsTotalSamplesQ3] = useState("")
	var [bsTotalSamplesQ4, setbsTotalSamplesQ4] = useState("")
	function handlebsTotalSamplesQ1(e){
		setbsTotalSamplesQ1(e.target.value)
	}
	function handlebsTotalSamplesQ2(e){
		setbsTotalSamplesQ2(e.target.value)
	}
	function handlebsTotalSamplesQ3(e){
		setbsTotalSamplesQ3(e.target.value)
	}
	function handlebsTotalSamplesQ4(e){
		setbsTotalSamplesQ4(e.target.value)
	}
	var bsTotalSamples = Number(bsTotalSamplesQ1) + Number(bsTotalSamplesQ2) + Number(bsTotalSamplesQ3) + Number(bsTotalSamplesQ4)
	
	
	var [bsMissoutQ1, setbsMissoutQ1] = useState("")
	var [bsMissoutQ2, setbsMissoutQ2] = useState("")
	var [bsMissoutQ3, setbsMissoutQ3] = useState("")
	var [bsMissoutQ4, setbsMissoutQ4] = useState("")
	function handlebsMissoutQ1(e){
		setbsMissoutQ1(e.target.value)
	}
	function handlebsMissoutQ2(e){
		setbsMissoutQ2(e.target.value)
	}
	function handlebsMissoutQ3(e){
		setbsMissoutQ3(e.target.value)
	}
	function handlebsMissoutQ4(e){
		setbsMissoutQ4(e.target.value)
	}
	var bsMissout = (1 - (Number(bsMissoutQ1) + Number(bsMissoutQ2) + Number(bsMissoutQ3) + Number(bsMissoutQ4)) / bsTotalSamples) * 40
	
	
	var [bsBunchQ1, setbsBunchQ1] = useState("")
	var [bsBunchQ2, setbsBunchQ2] = useState("")
	var [bsBunchQ3, setbsBunchQ3] = useState("")
	var [bsBunchQ4, setbsBunchQ4] = useState("")
	function handlebsBunchQ1(e){
		setbsBunchQ1(e.target.value)
	}
	function handlebsBunchQ2(e){
		setbsBunchQ2(e.target.value)
	}
	function handlebsBunchQ3(e){
		setbsBunchQ3(e.target.value)
	}
	function handlebsBunchQ4(e){
		setbsBunchQ4(e.target.value)
	}
	var bsBunch = (1 - (Number(bsBunchQ1) + Number(bsBunchQ2) + Number(bsBunchQ3) + Number(bsBunchQ4)) / bsTotalSamples) * 10
	
	
	var [bsUndercycleQ1, setbsUndercycleQ1] = useState("")
	var [bsUndercycleQ2, setbsUndercycleQ2] = useState("")
	var [bsUndercycleQ3, setbsUndercycleQ3] = useState("")
	var [bsUndercycleQ4, setbsUndercycleQ4] = useState("")
	function handlebsUndercycleQ1(e){
		setbsUndercycleQ1(e.target.value)
	}
	function handlebsUndercycleQ2(e){
		setbsUndercycleQ2(e.target.value)
	}
	function handlebsUndercycleQ3(e){
		setbsUndercycleQ3(e.target.value)
	}
	function handlebsUndercycleQ4(e){
		setbsUndercycleQ4(e.target.value)
	}
	var bsUndercycle = (1 - (Number(bsUndercycleQ1) + Number(bsUndercycleQ2) + Number(bsUndercycleQ3) + Number(bsUndercycleQ4)) / bsTotalSamples) * 40
	
	
	var [bsNoMarkQ1, setbsNoMarkQ1] = useState("")
	var [bsNoMarkQ2, setbsNoMarkQ2] = useState("")
	var [bsNoMarkQ3, setbsNoMarkQ3] = useState("")
	var [bsNoMarkQ4, setbsNoMarkQ4] = useState("")
	function handlebsNoMarkQ1(e){
		setbsNoMarkQ1(e.target.value)
	}
	function handlebsNoMarkQ2(e){
		setbsNoMarkQ2(e.target.value)
	}
	function handlebsNoMarkQ3(e){
		setbsNoMarkQ3(e.target.value)
	}
	function handlebsNoMarkQ4(e){
		setbsNoMarkQ4(e.target.value)
	}
	var bsNoMark = (1 - (Number(bsNoMarkQ1) + Number(bsNoMarkQ2) + Number(bsNoMarkQ3) + Number(bsNoMarkQ4)) / bsTotalSamples) * 10   
	// ================
	// END, BUNCH SPRAY
	// ================
	
	
	
	// ====
	// FDDO
	// ====
	var [fddoTotalSamplesQ1, setfddoTotalSamplesQ1] = useState("")
	var [fddoTotalSamplesQ2, setfddoTotalSamplesQ2] = useState("")
	var [fddoTotalSamplesQ3, setfddoTotalSamplesQ3] = useState("")
	var [fddoTotalSamplesQ4, setfddoTotalSamplesQ4] = useState("")
	function handlefddoTotalSamplesQ1(e){
		setfddoTotalSamplesQ1(e.target.value)
	}
	function handlefddoTotalSamplesQ2(e){
		setfddoTotalSamplesQ2(e.target.value)
	}
	function handlefddoTotalSamplesQ3(e){
		setfddoTotalSamplesQ3(e.target.value)
	}
	function handlefddoTotalSamplesQ4(e){
		setfddoTotalSamplesQ4(e.target.value)
	}
	var fddoTotalSamples = Number(fddoTotalSamplesQ1) + Number(fddoTotalSamplesQ2) + Number(fddoTotalSamplesQ3) + Number(fddoTotalSamplesQ4)
	
	
	var [fddoLateFirstQ1, setfddoLateFirstQ1] = useState("")
	var [fddoLateFirstQ2, setfddoLateFirstQ2] = useState("")
	var [fddoLateFirstQ3, setfddoLateFirstQ3] = useState("")
	var [fddoLateFirstQ4, setfddoLateFirstQ4] = useState("")
	function handlefddoLateFirstQ1(e){
		setfddoLateFirstQ1(e.target.value)
	}
	function handlefddoLateFirstQ2(e){
		setfddoLateFirstQ2(e.target.value)
	}
	function handlefddoLateFirstQ3(e){
		setfddoLateFirstQ3(e.target.value)
	}
	function handlefddoLateFirstQ4(e){
		setfddoLateFirstQ4(e.target.value)
	}
	var fddoLateFirst = (1 - (Number(fddoLateFirstQ1) + Number(fddoLateFirstQ2) + Number(fddoLateFirstQ3) + Number(fddoLateFirstQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoLateFinalQ1, setfddoLateFinalQ1] = useState("")
	var [fddoLateFinalQ2, setfddoLateFinalQ2] = useState("")
	var [fddoLateFinalQ3, setfddoLateFinalQ3] = useState("")
	var [fddoLateFinalQ4, setfddoLateFinalQ4] = useState("")
	function handlefddoLateFinalQ1(e){
		setfddoLateFinalQ1(e.target.value)
	}
	function handlefddoLateFinalQ2(e){
		setfddoLateFinalQ2(e.target.value)
	}
	function handlefddoLateFinalQ3(e){
		setfddoLateFinalQ3(e.target.value)
	}
	function handlefddoLateFinalQ4(e){
		setfddoLateFinalQ4(e.target.value)
	}
	var fddoLateFinal = (1 - (Number(fddoLateFinalQ1) + Number(fddoLateFinalQ2) + Number(fddoLateFinalQ3) + Number(fddoLateFinalQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoImproperQ1, setfddoImproperQ1] = useState("")
	var [fddoImproperQ2, setfddoImproperQ2] = useState("")
	var [fddoImproperQ3, setfddoImproperQ3] = useState("")
	var [fddoImproperQ4, setfddoImproperQ4] = useState("")
	function handlefddoImproperQ1(e){
		setfddoImproperQ1(e.target.value)
	}
	function handlefddoImproperQ2(e){
		setfddoImproperQ2(e.target.value)
	}
	function handlefddoImproperQ3(e){
		setfddoImproperQ3(e.target.value)
	}
	function handlefddoImproperQ4(e){
		setfddoImproperQ4(e.target.value)
	}
	var fddoImproper = (1 - (Number(fddoImproperQ1) + Number(fddoImproperQ2) + Number(fddoImproperQ3) + Number(fddoImproperQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoExtremeQ1, setfddoExtremeQ1] = useState("")
	var [fddoExtremeQ2, setfddoExtremeQ2] = useState("")
	var [fddoExtremeQ3, setfddoExtremeQ3] = useState("")
	var [fddoExtremeQ4, setfddoExtremeQ4] = useState("")
	function handlefddoExtremeQ1(e){
		setfddoExtremeQ1(e.target.value)
	}
	function handlefddoExtremeQ2(e){
		setfddoExtremeQ2(e.target.value)
	}
	function handlefddoExtremeQ3(e){
		setfddoExtremeQ3(e.target.value)
	}
	function handlefddoExtremeQ4(e){
		setfddoExtremeQ4(e.target.value)
	}
	var fddoExtreme = (1 - (Number(fddoExtremeQ1) + Number(fddoExtremeQ2) + Number(fddoExtremeQ3) + Number(fddoExtremeQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoFusedQ1, setfddoFusedQ1] = useState("")
	var [fddoFusedQ2, setfddoFusedQ2] = useState("")
	var [fddoFusedQ3, setfddoFusedQ3] = useState("")
	var [fddoFusedQ4, setfddoFusedQ4] = useState("")
	function handlefddoFusedQ1(e){
		setfddoFusedQ1(e.target.value)
	}
	function handlefddoFusedQ2(e){
		setfddoFusedQ2(e.target.value)
	}
	function handlefddoFusedQ3(e){
		setfddoFusedQ3(e.target.value)
	}
	function handlefddoFusedQ4(e){
		setfddoFusedQ4(e.target.value)
	}
	var fddoFused = (1 - (Number(fddoFusedQ1) + Number(fddoFusedQ2) + Number(fddoFusedQ3) + Number(fddoFusedQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoSingleQ1, setfddoSingleQ1] = useState("")
	var [fddoSingleQ2, setfddoSingleQ2] = useState("")
	var [fddoSingleQ3, setfddoSingleQ3] = useState("")
	var [fddoSingleQ4, setfddoSingleQ4] = useState("")
	function handlefddoSingleQ1(e){
		setfddoSingleQ1(e.target.value)
	}
	function handlefddoSingleQ2(e){
		setfddoSingleQ2(e.target.value)
	}
	function handlefddoSingleQ3(e){
		setfddoSingleQ3(e.target.value)
	}
	function handlefddoSingleQ4(e){
		setfddoSingleQ4(e.target.value)
	}
	var fddoSingle = (1 - (Number(fddoSingleQ1) + Number(fddoSingleQ2) + Number(fddoSingleQ3) + Number(fddoSingleQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoExcessQ1, setfddoExcessQ1] = useState("")
	var [fddoExcessQ2, setfddoExcessQ2] = useState("")
	var [fddoExcessQ3, setfddoExcessQ3] = useState("")
	var [fddoExcessQ4, setfddoExcessQ4] = useState("")
	function handlefddoExcessQ1(e){
		setfddoExcessQ1(e.target.value)
	}
	function handlefddoExcessQ2(e){
		setfddoExcessQ2(e.target.value)
	}
	function handlefddoExcessQ3(e){
		setfddoExcessQ3(e.target.value)
	}
	function handlefddoExcessQ4(e){
		setfddoExcessQ4(e.target.value)
	}
	var fddoExcess = (1 - (Number(fddoExcessQ1) + Number(fddoExcessQ2) + Number(fddoExcessQ3) + Number(fddoExcessQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoMissoutQ1, setfddoMissoutQ1] = useState("")
	var [fddoMissoutQ2, setfddoMissoutQ2] = useState("")
	var [fddoMissoutQ3, setfddoMissoutQ3] = useState("")
	var [fddoMissoutQ4, setfddoMissoutQ4] = useState("")
	function handlefddoMissoutQ1(e){
		setfddoMissoutQ1(e.target.value)
	}
	function handlefddoMissoutQ2(e){
		setfddoMissoutQ2(e.target.value)
	}
	function handlefddoMissoutQ3(e){
		setfddoMissoutQ3(e.target.value)
	}
	function handlefddoMissoutQ4(e){
		setfddoMissoutQ4(e.target.value)
	}
	var fddoMissout = (1 - (Number(fddoMissoutQ1) + Number(fddoMissoutQ2) + Number(fddoMissoutQ3) + Number(fddoMissoutQ4)) / fddoTotalSamples) * 5
	
	
	var [fddoLate3to5Q1, setfddoLate3to5Q1] = useState("")
	var [fddoLate3to5Q2, setfddoLate3to5Q2] = useState("")
	var [fddoLate3to5Q3, setfddoLate3to5Q3] = useState("")
	var [fddoLate3to5Q4, setfddoLate3to5Q4] = useState("")
	function handlefddoLate3to5Q1(e){
		setfddoLate3to5Q1(e.target.value)
	}
	function handlefddoLate3to5Q2(e){
		setfddoLate3to5Q2(e.target.value)
	}
	function handlefddoLate3to5Q3(e){
		setfddoLate3to5Q3(e.target.value)
	}
	function handlefddoLate3to5Q4(e){
		setfddoLate3to5Q4(e.target.value)
	}
	var fddoLate3to5 = (1 - (Number(fddoLate3to5Q1) + Number(fddoLate3to5Q2) + Number(fddoLate3to5Q3) + Number(fddoLate3to5Q4)) / fddoTotalSamples) * 10
	
	
	var [fddoNonFollowingQ1, setfddoNonFollowingQ1] = useState("")
	var [fddoNonFollowingQ2, setfddoNonFollowingQ2] = useState("")
	var [fddoNonFollowingQ3, setfddoNonFollowingQ3] = useState("")
	var [fddoNonFollowingQ4, setfddoNonFollowingQ4] = useState("")
	function handlefddoNonFollowingQ1(e){
		setfddoNonFollowingQ1(e.target.value)
	}
	function handlefddoNonFollowingQ2(e){
		setfddoNonFollowingQ2(e.target.value)
	}
	function handlefddoNonFollowingQ3(e){
		setfddoNonFollowingQ3(e.target.value)
	}
	function handlefddoNonFollowingQ4(e){
		setfddoNonFollowingQ4(e.target.value)
	}
	var fddoNonFollowing = (1 - (Number(fddoNonFollowingQ1) + Number(fddoNonFollowingQ2) + Number(fddoNonFollowingQ3) + Number(fddoNonFollowingQ4)) / fddoTotalSamples) * 10
	
	
	var [fddoNoMarkQ1, setfddoNoMarkQ1] = useState("")
	var [fddoNoMarkQ2, setfddoNoMarkQ2] = useState("")
	var [fddoNoMarkQ3, setfddoNoMarkQ3] = useState("")
	var [fddoNoMarkQ4, setfddoNoMarkQ4] = useState("")
	function handlefddoNoMarkQ1(e){
		setfddoNoMarkQ1(e.target.value)
	}
	function handlefddoNoMarkQ2(e){
		setfddoNoMarkQ2(e.target.value)
	}
	function handlefddoNoMarkQ3(e){
		setfddoNoMarkQ3(e.target.value)
	}
	function handlefddoNoMarkQ4(e){
		setfddoNoMarkQ4(e.target.value)
	}
	var fddoNoMark = (1 - (Number(fddoNoMarkQ1) + Number(fddoNoMarkQ2) + Number(fddoNoMarkQ3) + Number(fddoNoMarkQ4)) / fddoTotalSamples) * 5      
	// =========
	// END, FDDO
	// =========
	
	
	
	// ======
	// BAGSOK
	// ======
	var [bskTotalSamplesQ1, setbskTotalSamplesQ1] = useState("")
	var [bskTotalSamplesQ2, setbskTotalSamplesQ2] = useState("")
	var [bskTotalSamplesQ3, setbskTotalSamplesQ3] = useState("")
	var [bskTotalSamplesQ4, setbskTotalSamplesQ4] = useState("")
	function handlebskTotalSamplesQ1(e){
		setbskTotalSamplesQ1(e.target.value)
	}
	function handlebskTotalSamplesQ2(e){
		setbskTotalSamplesQ2(e.target.value)
	}
	function handlebskTotalSamplesQ3(e){
		setbskTotalSamplesQ3(e.target.value)
	}
	function handlebskTotalSamplesQ4(e){
		setbskTotalSamplesQ4(e.target.value)
	}
	var bskTotalSamples = Number(bskTotalSamplesQ1) + Number(bskTotalSamplesQ2) + Number(bskTotalSamplesQ3) + Number(bskTotalSamplesQ4)
	
	
	var [bskLowQ1, setbskLowQ1] = useState("")
	var [bskLowQ2, setbskLowQ2] = useState("")
	var [bskLowQ3, setbskLowQ3] = useState("")
	var [bskLowQ4, setbskLowQ4] = useState("")
	function handlebskLowQ1(e){
		setbskLowQ1(e.target.value)
	}
	function handlebskLowQ2(e){
		setbskLowQ2(e.target.value)
	}
	function handlebskLowQ3(e){
		setbskLowQ3(e.target.value)
	}
	function handlebskLowQ4(e){
		setbskLowQ4(e.target.value)
	}
	var bskLow = (1 - (Number(bskLowQ1) + Number(bskLowQ2) + Number(bskLowQ3) + Number(bskLowQ4)) / bskTotalSamples) * 20      
	
	
	var [bskNoPonyQ1, setbskNoPonyQ1] = useState("")
	var [bskNoPonyQ2, setbskNoPonyQ2] = useState("")
	var [bskNoPonyQ3, setbskNoPonyQ3] = useState("")
	var [bskNoPonyQ4, setbskNoPonyQ4] = useState("")
	function handlebskNoPonyQ1(e){
		setbskNoPonyQ1(e.target.value)
	}
	function handlebskNoPonyQ2(e){
		setbskNoPonyQ2(e.target.value)
	}
	function handlebskNoPonyQ3(e){
		setbskNoPonyQ3(e.target.value)
	}
	function handlebskNoPonyQ4(e){
		setbskNoPonyQ4(e.target.value)
	}
	var bskNoPony = (1 - (Number(bskNoPonyQ1) + Number(bskNoPonyQ2) + Number(bskNoPonyQ3) + Number(bskNoPonyQ4)) / bskTotalSamples) * 5      
	
	
	var [bskShortQ1, setbskShortQ1] = useState("")
	var [bskShortQ2, setbskShortQ2] = useState("")
	var [bskShortQ3, setbskShortQ3] = useState("")
	var [bskShortQ4, setbskShortQ4] = useState("")
	function handlebskShortQ1(e){
		setbskShortQ1(e.target.value)
	}
	function handlebskShortQ2(e){
		setbskShortQ2(e.target.value)
	}
	function handlebskShortQ3(e){
		setbskShortQ3(e.target.value)
	}
	function handlebskShortQ4(e){
		setbskShortQ4(e.target.value)
	}
	var bskShort = (1 - (Number(bskShortQ1) + Number(bskShortQ2) + Number(bskShortQ3) + Number(bskShortQ4)) / bskTotalSamples) * 5      
	
	
	var [bskLateQ1, setbskLateQ1] = useState("")
	var [bskLateQ2, setbskLateQ2] = useState("")
	var [bskLateQ3, setbskLateQ3] = useState("")
	var [bskLateQ4, setbskLateQ4] = useState("")
	function handlebskLateQ1(e){
		setbskLateQ1(e.target.value)
	}
	function handlebskLateQ2(e){
		setbskLateQ2(e.target.value)
	}
	function handlebskLateQ3(e){
		setbskLateQ3(e.target.value)
	}
	function handlebskLateQ4(e){
		setbskLateQ4(e.target.value)
	}
	var bskLate = (1 - (Number(bskLateQ1) + Number(bskLateQ2) + Number(bskLateQ3) + Number(bskLateQ4)) / bskTotalSamples) * 25      
	
	
	var [bskNoPlasticQ1, setbskNoPlasticQ1] = useState("")
	var [bskNoPlasticQ2, setbskNoPlasticQ2] = useState("")
	var [bskNoPlasticQ3, setbskNoPlasticQ3] = useState("")
	var [bskNoPlasticQ4, setbskNoPlasticQ4] = useState("")
	function handlebskNoPlasticQ1(e){
		setbskNoPlasticQ1(e.target.value)
	}
	function handlebskNoPlasticQ2(e){
		setbskNoPlasticQ2(e.target.value)
	}
	function handlebskNoPlasticQ3(e){
		setbskNoPlasticQ3(e.target.value)
	}
	function handlebskNoPlasticQ4(e){
		setbskNoPlasticQ4(e.target.value)
	}
	var bskNoPlastic = (1 - (Number(bskNoPlasticQ1) + Number(bskNoPlasticQ2) + Number(bskNoPlasticQ3) + Number(bskNoPlasticQ4)) / bskTotalSamples) * 10      
	
	
	var [bskImproperQ1, setbskImproperQ1] = useState("")
	var [bskImproperQ2, setbskImproperQ2] = useState("")
	var [bskImproperQ3, setbskImproperQ3] = useState("")
	var [bskImproperQ4, setbskImproperQ4] = useState("")
	function handlebskImproperQ1(e){
		setbskImproperQ1(e.target.value)
	}
	function handlebskImproperQ2(e){
		setbskImproperQ2(e.target.value)
	}
	function handlebskImproperQ3(e){
		setbskImproperQ3(e.target.value)
	}
	function handlebskImproperQ4(e){
		setbskImproperQ4(e.target.value)
	}
	var bskImproper = (1 - (Number(bskImproperQ1) + Number(bskImproperQ2) + Number(bskImproperQ3) + Number(bskImproperQ4)) / bskTotalSamples) * 5      
	
	
	var [bskIncompleteQ1, setbskIncompleteQ1] = useState("")
	var [bskIncompleteQ2, setbskIncompleteQ2] = useState("")
	var [bskIncompleteQ3, setbskIncompleteQ3] = useState("")
	var [bskIncompleteQ4, setbskIncompleteQ4] = useState("")
	function handlebskIncompleteQ1(e){
		setbskIncompleteQ1(e.target.value)
	}
	function handlebskIncompleteQ2(e){
		setbskIncompleteQ2(e.target.value)
	}
	function handlebskIncompleteQ3(e){
		setbskIncompleteQ3(e.target.value)
	}
	function handlebskIncompleteQ4(e){
		setbskIncompleteQ4(e.target.value)
	}
	var bskIncomplete = (1 - (Number(bskIncompleteQ1) + Number(bskIncompleteQ2) + Number(bskIncompleteQ3) + Number(bskIncompleteQ4)) / bskTotalSamples) * 5      
	
	
	var [bskNoSunburnQ1, setbskNoSunburnQ1] = useState("")
	var [bskNoSunburnQ2, setbskNoSunburnQ2] = useState("")
	var [bskNoSunburnQ3, setbskNoSunburnQ3] = useState("")
	var [bskNoSunburnQ4, setbskNoSunburnQ4] = useState("")
	function handlebskNoSunburnQ1(e){
		setbskNoSunburnQ1(e.target.value)
	}
	function handlebskNoSunburnQ2(e){
		setbskNoSunburnQ2(e.target.value)
	}
	function handlebskNoSunburnQ3(e){
		setbskNoSunburnQ3(e.target.value)
	}
	function handlebskNoSunburnQ4(e){
		setbskNoSunburnQ4(e.target.value)
	}
	var bskNoSunburn = (1 - (Number(bskNoSunburnQ1) + Number(bskNoSunburnQ2) + Number(bskNoSunburnQ3) + Number(bskNoSunburnQ4)) / bskTotalSamples) * 25      
	// ===========
	// END, BAGSOK
	// ===========
	
	
	// =============
	// LEAF TRIMMING
	// =============
	var [leafTotalSamplesQ1, setleafTotalSamplesQ1] = useState("")
	var [leafTotalSamplesQ2, setleafTotalSamplesQ2] = useState("")
	var [leafTotalSamplesQ3, setleafTotalSamplesQ3] = useState("")
	var [leafTotalSamplesQ4, setleafTotalSamplesQ4] = useState("")
	function handleleafTotalSamplesQ1(e){
		setleafTotalSamplesQ1(e.target.value)
	}
	function handleleafTotalSamplesQ2(e){
		setleafTotalSamplesQ2(e.target.value)
	}
	function handleleafTotalSamplesQ3(e){
		setleafTotalSamplesQ3(e.target.value)
	}
	function handleleafTotalSamplesQ4(e){
		setleafTotalSamplesQ4(e.target.value)
	}
	var leafTotalSamples = Number(leafTotalSamplesQ1) + Number(leafTotalSamplesQ2) + Number(leafTotalSamplesQ3) + Number(leafTotalSamplesQ4)
	
	
	var [leafMissoutQ1, setleafMissoutQ1] = useState("")
	var [leafMissoutQ2, setleafMissoutQ2] = useState("")
	var [leafMissoutQ3, setleafMissoutQ3] = useState("")
	var [leafMissoutQ4, setleafMissoutQ4] = useState("")
	function handleleafMissoutQ1(e){
		setleafMissoutQ1(e.target.value)
	}
	function handleleafMissoutQ2(e){
		setleafMissoutQ2(e.target.value)
	}
	function handleleafMissoutQ3(e){
		setleafMissoutQ3(e.target.value)
	}
	function handleleafMissoutQ4(e){
		setleafMissoutQ4(e.target.value)
	}
	var leafMissout = (1 - (Number(leafMissoutQ1) + Number(leafMissoutQ2) + Number(leafMissoutQ3) + Number(leafMissoutQ4)) / leafTotalSamples) * 25
	
	var [leafLateQ1, setleafLateQ1] = useState("")
	var [leafLateQ2, setleafLateQ2] = useState("")
	var [leafLateQ3, setleafLateQ3] = useState("")
	var [leafLateQ4, setleafLateQ4] = useState("")
	function handleleafLateQ1(e){
		setleafLateQ1(e.target.value)
	}
	function handleleafLateQ2(e){
		setleafLateQ2(e.target.value)
	}
	function handleleafLateQ3(e){
		setleafLateQ3(e.target.value)
	}
	function handleleafLateQ4(e){
		setleafLateQ4(e.target.value)
	}
	var leafLate = (1 - (Number(leafLateQ1) + Number(leafLateQ2) + Number(leafLateQ3) + Number(leafLateQ4)) / leafTotalSamples) * 30
	
	
	var [leafOverQ1, setleafOverQ1] = useState("")
	var [leafOverQ2, setleafOverQ2] = useState("")
	var [leafOverQ3, setleafOverQ3] = useState("")
	var [leafOverQ4, setleafOverQ4] = useState("")
	function handleleafOverQ1(e){
		setleafOverQ1(e.target.value)
	}
	function handleleafOverQ2(e){
		setleafOverQ2(e.target.value)
	}
	function handleleafOverQ3(e){
		setleafOverQ3(e.target.value)
	}
	function handleleafOverQ4(e){
		setleafOverQ4(e.target.value)
	}
	var leafOver = (1 - (Number(leafOverQ1) + Number(leafOverQ2) + Number(leafOverQ3) + Number(leafOverQ4)) / leafTotalSamples) * 25
	
	
	var [leafNonQ1, setleafNonQ1] = useState("")
	var [leafNonQ2, setleafNonQ2] = useState("")
	var [leafNonQ3, setleafNonQ3] = useState("")
	var [leafNonQ4, setleafNonQ4] = useState("")
	function handleleafNonQ1(e){
		setleafNonQ1(e.target.value)
	}
	function handleleafNonQ2(e){
		setleafNonQ2(e.target.value)
	}
	function handleleafNonQ3(e){
		setleafNonQ3(e.target.value)
	}
	function handleleafNonQ4(e){
		setleafNonQ4(e.target.value)
	}
	var leafNon = (1 - (Number(leafNonQ1) + Number(leafNonQ2) + Number(leafNonQ3) + Number(leafNonQ4)) / leafTotalSamples) * 20
	// ==================
	// END, LEAF TRIMMING
	// ==================
	
	
	// ====
	// ...
	// ====
	var wholeBud = bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking
    var wholePropping = pgLate + pgMissout + pgImproper
    var wholeBunch = bsMissout + bsBunch + bsUndercycle + bsNoMark
    var wholeFddo = fddoLateFirst + fddoLateFinal + fddoImproper + fddoExtreme + fddoFused + fddoSingle + fddoExcess + fddoMissout + fddoLate3to5 + fddoNonFollowing + fddoNoMark
    var wholeBagsok = bskLow + bskNoPony + bskShort + bskLate + bskNoPlastic + bskImproper + bskIncomplete + bskNoSunburn
    var wholeLeaf = leafMissout + leafLate + leafOver + leafNon

	
	// =======
	// PouchDB
	// =======
	var db = new PouchDB("Blog")
    
	// ===========
	// form submit
	// ===========
	async function handleSubmit(e){
		e.preventDefault()
		console.log("submit section")
		
		try {
        await db.put({
			_id:new Date().toJSON(),
			farm:farm,
			location:location,
			date:date,
			week:week,
			
			bbLateInstallationQ: [bbLateInstallationQ1, bbLateInstallationQ2, bbLateInstallationQ3, bbLateInstallationQ4],
			bbMissOutQ: [bbMissOutQ1,bbMissOutQ2,bbMissOutQ3,bbMissOutQ4],
			bbLateRetrievalQ: [bbLateRetrievalQ1,bbLateRetrievalQ2,bbLateRetrievalQ3,bbLateRetrievalQ4],
			bbImproperInstallQ: [bbImproperInstallQ1,bbImproperInstallQ2,bbImproperInstallQ3,bbImproperInstallQ4],
			bbNoMarkingQ: [bbNoMarkingQ1,bbNoMarkingQ2,bbNoMarkingQ3,bbNoMarkingQ4],
			bbTotalSamplesQ: [bbTotalSamplesQ1,bbTotalSamplesQ2,bbTotalSamplesQ3,bbTotalSamplesQ4],
			wholeBud: Math.round(wholeBud),
			
			
			pgLateQ: [pgLateQ1,pgLateQ2,pgLateQ3,pgLateQ4],
			pgMissoutQ: [pgMissoutQ1,pgMissoutQ2,pgMissoutQ3,pgMissoutQ4],
			pgImproperQ: [pgImproperQ1,pgImproperQ2,pgImproperQ3,pgImproperQ4],
			pgTotalSamplesQ: [pgTotalSamplesQ1,pgTotalSamplesQ2,pgTotalSamplesQ3,pgTotalSamplesQ4],
			wholePropping: Math.round(wholePropping),
			
			
			bsMissoutQ: [bsMissoutQ1,bsMissoutQ2,bsMissoutQ3,bsMissoutQ4],
			bsBunchQ: [bsBunchQ1,bsBunchQ2,bsBunchQ3,bsBunchQ4],
			bsUndercycleQ: [bsUndercycleQ1,bsUndercycleQ2,bsUndercycleQ3,bsUndercycleQ4],
			bsNoMarkQ: [bsNoMarkQ1,bsNoMarkQ2,bsNoMarkQ3,bsNoMarkQ4],
			bsTotalSamplesQ: [bsTotalSamplesQ1,bsTotalSamplesQ2,bsTotalSamplesQ3,bsTotalSamplesQ4],
			wholeBunch: Math.round(wholeBunch),
			
			
			fddoLateFirstQ: [fddoLateFirstQ1,fddoLateFirstQ2,fddoLateFirstQ3,fddoLateFirstQ4],
			fddoLateFinalQ: [fddoLateFinalQ1,fddoLateFinalQ2,fddoLateFinalQ3,fddoLateFinalQ4],
			fddoImproperQ: [fddoImproperQ1,fddoImproperQ2,fddoImproperQ3,fddoImproperQ4],
			fddoExtremeQ: [fddoExtremeQ1,fddoExtremeQ2,fddoExtremeQ3,fddoExtremeQ4],
			fddoFusedQ: [fddoFusedQ1,fddoFusedQ2,fddoFusedQ3,fddoFusedQ4],
			fddoSingleQ: [fddoSingleQ1,fddoSingleQ2,fddoSingleQ3,fddoSingleQ4],
			fddoExcessQ: [fddoExcessQ1,fddoExcessQ2,fddoExcessQ3,fddoExcessQ4],
			fddoMissoutQ: [fddoMissoutQ1,fddoMissoutQ2,fddoMissoutQ3,fddoMissoutQ4],
			fddoLate3to5Q: [fddoLate3to5Q1,fddoLate3to5Q2,fddoLate3to5Q3,fddoLate3to5Q4],
			fddoNonFollowingQ: [fddoNonFollowingQ1,fddoNonFollowingQ2,fddoNonFollowingQ3,fddoNonFollowingQ4],
			fddoNoMarkQ: [fddoNoMarkQ1,fddoNoMarkQ2,fddoNoMarkQ3,fddoNoMarkQ4],
			fddoTotalSamplesQ: [fddoTotalSamplesQ1,fddoTotalSamplesQ2,fddoTotalSamplesQ3,fddoTotalSamplesQ4],
			wholeFddo: Math.round(wholeFddo),
			
			
			bskLowQ: [bskLowQ1,bskLowQ2,bskLowQ3,bskLowQ4],
			bskNoPonyQ: [bskNoPonyQ1,bskNoPonyQ2,bskNoPonyQ3,bskNoPonyQ4],
			bskShortQ: [bskShortQ1,bskShortQ2,bskShortQ3,bskShortQ4],
			bskLateQ: [bskLateQ1,bskLateQ2,bskLateQ3,bskLateQ4],
			bskNoPlasticQ: [bskNoPlasticQ1,bskNoPlasticQ2,bskNoPlasticQ3,bskNoPlasticQ4],
			bskImproperQ: [bskImproperQ1,bskImproperQ2,bskImproperQ3,bskImproperQ4],
			bskIncompleteQ: [bskIncompleteQ1,bskIncompleteQ2,bskIncompleteQ3,bskIncompleteQ4],
			bskNoSunburnQ: [bskNoSunburnQ1,bskNoSunburnQ2,bskNoSunburnQ3,bskNoSunburnQ4],
			bskTotalSamplesQ: [bskTotalSamplesQ1,bskTotalSamplesQ2,bskTotalSamplesQ3,bskTotalSamplesQ4],
			wholeBagsok: Math.round(wholeBagsok),
			
			
			leafMissoutQ: [leafMissoutQ1,leafMissoutQ2,leafMissoutQ3,leafMissoutQ4],
			leafLateQ: [leafLateQ1,leafLateQ2,leafLateQ3,leafLateQ4],
			leafOverQ: [leafOverQ1,leafOverQ2,leafOverQ3,leafOverQ4],
			leafNonQ: [leafNonQ1,leafNonQ2,leafNonQ3,leafNonQ4],
			leafTotalSamplesQ: [leafTotalSamplesQ1,leafTotalSamplesQ2,leafTotalSamplesQ3,leafTotalSamplesQ4],	
			wholeLeaf: Math.round(wholeLeaf),
			
			overallScore: Math.round( (wholeBud + wholePropping + wholeBunch + wholeFddo + wholeBagsok + wholeLeaf)/6 ),     
			
			evaluatorName: localStorage.getItem("evaluatorName"),
			supervisorName: "",
			status: "offline"
        })
		}
		catch (err){ console.log(err) }
		// ==============
		// end, form data
		// ==============
		
		return window.location = "/evaluator"
		
	}
	// =================
	// end, handleSubmit
	// =================
	
	
	function handleClickGoBack(){
		return window.location = "/evaluator"
	}
	
	

	
  return (
    <div>
		  
    <div className="bg-secondary">
    <Container>
		<Row className="justify-content-center">
			<Col xs={10}>
				<h4 className="m-0 text-white pt-3 pb-3">FARM KPI</h4>
			</Col>
		</Row>
	</Container>
	</div>
	
	<br />
	<Container>
		<Row className="justify-content-center">
			<Col xs={10}>
				<p style={{cursor:"pointer"}} onClick={handleClickGoBack}>GO BACK</p>
			</Col>
		</Row>
	</Container>
		  
     <Container>
	  <Form onSubmit={handleSubmit}>
       <Row className="justify-content-center">
         <Col xs={10}>
			 <p className="fw-bold mt-1 mb-0 text-center">TAGUM RESOURCES AGRI INDUSTRIES INC</p>
			 <p className="fw-bold m-0 text-center">FRUIT CARE  EVALUATION</p>
			 <br />
			 
			 {/* Information */}
                      <Form.Group className="mb-1">
                        <Form.Label>Farm</Form.Label>
                        <Form.Control type="text" value={farm} onChange={handleFarm} required />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Location/Block No.</Form.Label>
                        <Form.Control type="text" value={location} onChange={handleLocation} required />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" value={date} onChange={handleDate} required />
                      </Form.Group>
					
					  <Form.Group className="mb-1">
                        <Form.Label>Week No.</Form.Label>
                        <Form.Control type="text" value={week} onChange={handleWeek} required />
                      </Form.Group>
		 </Col>
       </Row>
	
	  <br />
      <br />
	  
	  {/* =========== */}
      {/* BUD BAGGING */}
	  {/* =========== */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BUD BAGGING</h4>
			 {/* Late Installation (˃50% ) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Installation (˃50% )</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={bbLateInstallationQ1} onChange={handlebbLateInstallationQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={bbLateInstallationQ2} onChange={handlebbLateInstallationQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={bbLateInstallationQ3} onChange={handlebbLateInstallationQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={bbLateInstallationQ4} onChange={handlebbLateInstallationQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Miss out (Bending Stage) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Miss out (Bending Stage)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbMissOutQ1} onChange={handlebbMissOutQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={bbMissOutQ2} onChange={handlebbMissOutQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={bbMissOutQ3} onChange={handlebbMissOutQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={bbMissOutQ4} onChange={handlebbMissOutQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late Retrieval (3-6 o'clock w/ no bracks open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Retrieval (3-6 o'clock w/ no bracks open)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbLateRetrievalQ1} onChange={handlebbLateRetrievalQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbLateRetrievalQ2} onChange={handlebbLateRetrievalQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbLateRetrievalQ3} onChange={handlebbLateRetrievalQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbLateRetrievalQ4} onChange={handlebbLateRetrievalQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbImproperInstallQ1} onChange={handlebbImproperInstallQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbImproperInstallQ2} onChange={handlebbImproperInstallQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbImproperInstallQ3} onChange={handlebbImproperInstallQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbImproperInstallQ4} onChange={handlebbImproperInstallQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No marking</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbNoMarkingQ1} onChange={handlebbNoMarkingQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbNoMarkingQ2} onChange={handlebbNoMarkingQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbNoMarkingQ3} onChange={handlebbNoMarkingQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbNoMarkingQ4} onChange={handlebbNoMarkingQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bbTotalSamplesQ1} onChange={handlebbTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bbTotalSamplesQ2} onChange={handlebbTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bbTotalSamplesQ3} onChange={handlebbTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bbTotalSamplesQ4} onChange={handlebbTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)}%</h6></Col>
	   </Row>

	{/* ================ */}
	{/* END, BUD BAGGING */}
	{/* ================ */}
	<br />
	<br />
	<br />
	
	
	{/* ================ */}
	{/* PROPPING/ GUYING */}
	{/* ================ */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">PROPPING/ GUYING</h4>
			 {/* Late- 5 Bracks Open to Full Bending */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late- 5 Bracks Open to Full Bending</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={pgLateQ1} onChange={handlepgLateQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={pgLateQ2} onChange={handlepgLateQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={pgLateQ3} onChange={handlepgLateQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={pgLateQ4} onChange={handlepgLateQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Missout- All hands open and beyond */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout- All hands open and beyond</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={pgMissoutQ1} onChange={handlepgMissoutQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={pgMissoutQ2} onChange={handlepgMissoutQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={pgMissoutQ3} onChange={handlepgMissoutQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={pgMissoutQ4} onChange={handlepgMissoutQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation (Lose & Positioning) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation (Lose and Positioning)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={pgImproperQ1} onChange={handlepgImproperQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={pgImproperQ2} onChange={handlepgImproperQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={pgImproperQ3} onChange={handlepgImproperQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={pgImproperQ4} onChange={handlepgImproperQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={pgTotalSamplesQ1} onChange={handlepgTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={pgTotalSamplesQ2} onChange={handlepgTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={pgTotalSamplesQ3} onChange={handlepgTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={pgTotalSamplesQ4} onChange={handlepgTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(pgLate + pgMissout + pgImproper)}%</h6></Col>
	   </Row>
    {/* ===================== */}
	{/* END, PROPPING/ GUYING */}
	{/* ===================== */}
	<br />
	<br />
	<br />

	
    {/* ===================== */}
	{/* BUNCH SPRAY */}
	{/* ===================== */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BUNCH SPRAY</h4>
			 {/* Missout */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={bsMissoutQ1} onChange={handlebsMissoutQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={bsMissoutQ2} onChange={handlebsMissoutQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={bsMissoutQ3} onChange={handlebsMissoutQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={bsMissoutQ4} onChange={handlebsMissoutQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Bunch Spray Stain */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bunch Spray Stain</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsBunchQ1} onChange={handlebsBunchQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={bsBunchQ2} onChange={handlebsBunchQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={bsBunchQ3} onChange={handlebsBunchQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={bsBunchQ4} onChange={handlebsBunchQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Undercycle */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Undercycle</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsUndercycleQ1} onChange={handlebsUndercycleQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsUndercycleQ2} onChange={handlebsUndercycleQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsUndercycleQ3} onChange={handlebsUndercycleQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsUndercycleQ4} onChange={handlebsUndercycleQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No Marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Marking</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsNoMarkQ1} onChange={handlebsNoMarkQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsNoMarkQ2} onChange={handlebsNoMarkQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsNoMarkQ3} onChange={handlebsNoMarkQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsNoMarkQ4} onChange={handlebsNoMarkQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bsTotalSamplesQ1} onChange={handlebsTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bsTotalSamplesQ2} onChange={handlebsTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bsTotalSamplesQ3} onChange={handlebsTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bsTotalSamplesQ4} onChange={handlebsTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(bsMissout + bsBunch + bsUndercycle + bsNoMark)}%</h6></Col>
	   </Row>	    
    {/* ================ */}
	{/* END, BUNCH SPRAY */}
	{/* ================ */}
	<br />
	<br />
	<br />
	  
	
	{/* ==== */}
	{/* FDDO */}
	{/* === */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">FDDO</h4>
			 {/* Late (1st pass- 3 to 5 hands open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (1st pass- 3 to 5 hands open)</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={fddoLateFirstQ1} onChange={handlefddoLateFirstQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={fddoLateFirstQ2} onChange={handlefddoLateFirstQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={fddoLateFirstQ3} onChange={handlefddoLateFirstQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={fddoLateFirstQ4} onChange={handlefddoLateFirstQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late (final pass- 6 all hands open) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (final pass- 6 all hands open)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoLateFinalQ1} onChange={handlefddoLateFinalQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={fddoLateFinalQ2} onChange={handlefddoLateFinalQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={fddoLateFinalQ3} onChange={handlefddoLateFinalQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={fddoLateFinalQ4} onChange={handlefddoLateFinalQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoImproperQ1} onChange={handlefddoImproperQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoImproperQ2} onChange={handlefddoImproperQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoImproperQ3} onChange={handlefddoImproperQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoImproperQ4} onChange={handlefddoImproperQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Extreme right */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Extreme right</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoExtremeQ1} onChange={handlefddoExtremeQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoExtremeQ2} onChange={handlefddoExtremeQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoExtremeQ3} onChange={handlefddoExtremeQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoExtremeQ4} onChange={handlefddoExtremeQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Fused  Finger */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fused  Finger</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoFusedQ1} onChange={handlefddoFusedQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoFusedQ2} onChange={handlefddoFusedQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoFusedQ3} onChange={handlefddoFusedQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoFusedQ4} onChange={handlefddoFusedQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Single/ 3 layers */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Single/ 3 layers</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoSingleQ1} onChange={handlefddoSingleQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoSingleQ2} onChange={handlefddoSingleQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoSingleQ3} onChange={handlefddoSingleQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoSingleQ4} onChange={handlefddoSingleQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Excess Finger/ mokillo */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Excess Finger/ mokillo</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoExcessQ1} onChange={handlefddoExcessQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoExcessQ2} onChange={handlefddoExcessQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoExcessQ3} onChange={handlefddoExcessQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoExcessQ4} onChange={handlefddoExcessQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Missout (3 to 5 nodes) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout (3 to 5 nodes)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoMissoutQ1} onChange={handlefddoMissoutQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoMissoutQ2} onChange={handlefddoMissoutQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoMissoutQ3} onChange={handlefddoMissoutQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoMissoutQ4} onChange={handlefddoMissoutQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Late (3 to 5 nodes) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late (3 to 5 nodes)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoLate3to5Q1} onChange={handlefddoLate3to5Q1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoLate3to5Q2} onChange={handlefddoLate3to5Q2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoLate3to5Q3} onChange={handlefddoLate3to5Q3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoLate3to5Q4} onChange={handlefddoLate3to5Q4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Non following of hand prunning schedule */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Non following of hand prunning schedule</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoNonFollowingQ1} onChange={handlefddoNonFollowingQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoNonFollowingQ2} onChange={handlefddoNonFollowingQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoNonFollowingQ3} onChange={handlefddoNonFollowingQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoNonFollowingQ4} onChange={handlefddoNonFollowingQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* No Marking */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Marking</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoNoMarkQ1} onChange={handlefddoNoMarkQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoNoMarkQ2} onChange={handlefddoNoMarkQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoNoMarkQ3} onChange={handlefddoNoMarkQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoNoMarkQ4} onChange={handlefddoNoMarkQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={fddoTotalSamplesQ1} onChange={handlefddoTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={fddoTotalSamplesQ2} onChange={handlefddoTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={fddoTotalSamplesQ3} onChange={handlefddoTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={fddoTotalSamplesQ4} onChange={handlefddoTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(fddoLateFirst + fddoLateFinal + fddoImproper + fddoExtreme + fddoFused + fddoSingle + fddoExcess + fddoMissout + fddoLate3to5 + fddoNonFollowing + fddoNoMark)}%</h6></Col>
	   </Row>	    
	{/* ========= */}
	{/* END, FDDO */}
	{/* ========= */}
	<br />
	<br />
	<br />
	
	
	
	{/* ====== */}
	{/* BAGSOK */}
	{/* ====== */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">BAGSOK</h4>
			 {/* Low Tying */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Low Tying</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={bskLowQ1} onChange={handlebskLowQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={bskLowQ2} onChange={handlebskLowQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={bskLowQ3} onChange={handlebskLowQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={bskLowQ4} onChange={handlebskLowQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* No Ponytail */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Ponytail</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskNoPonyQ1} onChange={handlebskNoPonyQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={bskNoPonyQ2} onChange={handlebskNoPonyQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={bskNoPonyQ3} onChange={handlebskNoPonyQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={bskNoPonyQ4} onChange={handlebskNoPonyQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Short/ Long Cutting of Polybag */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Short/ Long Cutting of Polybag</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskShortQ1} onChange={handlebskShortQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskShortQ2} onChange={handlebskShortQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskShortQ3} onChange={handlebskShortQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskShortQ4} onChange={handlebskShortQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late Bagging/ Debelling */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late Bagging/ Debelling</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskLateQ1} onChange={handlebskLateQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskLateQ2} onChange={handlebskLateQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskLateQ3} onChange={handlebskLateQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskLateQ4} onChange={handlebskLateQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* No Plastic Insert */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Plastic Insert</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskNoPlasticQ1} onChange={handlebskNoPlasticQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskNoPlasticQ2} onChange={handlebskNoPlasticQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskNoPlasticQ3} onChange={handlebskNoPlasticQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskNoPlasticQ4} onChange={handlebskNoPlasticQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Improper Installation */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Improper Installation</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskImproperQ1} onChange={handlebskImproperQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskImproperQ2} onChange={handlebskImproperQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskImproperQ3} onChange={handlebskImproperQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskImproperQ4} onChange={handlebskImproperQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Incomplete */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Incomplete</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskIncompleteQ1} onChange={handlebskIncompleteQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskIncompleteQ2} onChange={handlebskIncompleteQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskIncompleteQ3} onChange={handlebskIncompleteQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskIncompleteQ4} onChange={handlebskIncompleteQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* No Sunburn Protection (Newspaper) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Sunburn Protection (Newspaper)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskNoSunburnQ1} onChange={handlebskNoSunburnQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskNoSunburnQ2} onChange={handlebskNoSunburnQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskNoSunburnQ3} onChange={handlebskNoSunburnQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskNoSunburnQ4} onChange={handlebskNoSunburnQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={bskTotalSamplesQ1} onChange={handlebskTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={bskTotalSamplesQ2} onChange={handlebskTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={bskTotalSamplesQ3} onChange={handlebskTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={bskTotalSamplesQ4} onChange={handlebskTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(bskLow + bskNoPony + bskShort + bskLate + bskNoPlastic + bskImproper + bskIncomplete + bskNoSunburn)}%</h6></Col>
	   </Row>
	{/* ========= */}
	{/* END, BAGSOK */}
	{/* ========= */}
	<br />
	<br />
	<br />
		  
	

	{/* ============= */}
	{/* LEAF TRIMMING */}
	{/* ============= */}
       <Row className="justify-content-center">
         <Col xs={10}>
			 <h4 className="m-0">LEAF TRIMMING</h4>
			 {/* Missout */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Missout</Accordion.Header>
                <Accordion.Body>
					  <Row className="justify-content-center">
                        <Col><Form.Control type="number" value={leafMissoutQ1} onChange={handleleafMissoutQ1} required placeholder="Q1" /></Col>
                        <Col><Form.Control type="number" value={leafMissoutQ2} onChange={handleleafMissoutQ2} required placeholder="Q2" /></Col>
						<Col><Form.Control type="number" value={leafMissoutQ3} onChange={handleleafMissoutQ3} required placeholder="Q3" /></Col>
						<Col><Form.Control type="number" value={leafMissoutQ4} onChange={handleleafMissoutQ4} required placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Late ( ˃ 1 week old) */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Late ( ˃ 1 week old)</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={leafLateQ1} onChange={handleleafLateQ1} type="number" placeholder="Q1" required /></Col>
                        <Col> <Form.Control value={leafLateQ2} onChange={handleleafLateQ2} type="number" placeholder="Q2" required /></Col>
						<Col> <Form.Control value={leafLateQ3} onChange={handleleafLateQ3} type="number" placeholder="Q3" required /></Col>
						<Col> <Form.Control value={leafLateQ4} onChange={handleleafLateQ4} type="number" placeholder="Q4" required /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Over Cut */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Over Cut</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={leafOverQ1} onChange={handleleafOverQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={leafOverQ2} onChange={handleleafOverQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={leafOverQ3} onChange={handleleafOverQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={leafOverQ4} onChange={handleleafOverQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 {/* Non FOR */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Non FOR</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={leafNonQ1} onChange={handleleafNonQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={leafNonQ2} onChange={handleleafNonQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={leafNonQ3} onChange={handleleafNonQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={leafNonQ4} onChange={handleleafNonQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
			 
			 {/* Total No. of Samples */}
			 <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Total No. of Samples</Accordion.Header>
                <Accordion.Body>
                     <Row className="justify-content-center">
                        <Col> <Form.Control value={leafTotalSamplesQ1} onChange={handleleafTotalSamplesQ1} type="number" placeholder="Q1" /></Col>
                        <Col> <Form.Control value={leafTotalSamplesQ2} onChange={handleleafTotalSamplesQ2} type="number" placeholder="Q2" /></Col>
						<Col> <Form.Control value={leafTotalSamplesQ3} onChange={handleleafTotalSamplesQ3} type="number" placeholder="Q3" /></Col>
						<Col> <Form.Control value={leafTotalSamplesQ4} onChange={handleleafTotalSamplesQ4} type="number" placeholder="Q4" /></Col>
                      </Row>
                </Accordion.Body>
              </Accordion.Item>
			  </Accordion>
			 
		 </Col>
       </Row>	   

	   {/* another row for displaying score */}
	   <Row className="justify-content-center ps-3 pe-3">
		 <Col xs={4} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Score</h6></Col>
		 <Col xs={6} className="border rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round(leafMissout + leafLate + leafOver + leafNon)}%</h6></Col>
	   </Row>	
	{/* ================== */}
	{/* END, LEAF TRIMMING */}
	{/* ================== */}
	<br />
	<br />
	

	{/* Overall Score */}
	<Row className="justify-content-center ps-3 pe-3">
	  <Col xs={4} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>Overall Score</h6></Col>
	  <Col xs={6} className="border border-dark rounded" style={{paddingTop:"12px", paddingBottom:"12px", paddingLeft:"17px"}}><h6>{Math.round( (wholeBud + wholePropping + wholeBunch + wholeFddo + wholeBagsok + wholeLeaf)/6 )}%</h6></Col>
	</Row>
	<br/>
	<br/>
	
	<Row className="justify-content-center">
	  <Col xs={10} ><Button type="submit" variant="dark">Submit</Button></Col>
	</Row>
	<br/>
	<br/>
	<br/>

 
	   </Form>
     </Container>

    </div>
  );
}

export default Create;
































































































































































































































































































































































































































































































































































































































