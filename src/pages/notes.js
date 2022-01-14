

        var formData = {
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
			
			pgLateQ: [pgLateQ1,pgLateQ2,pgLateQ3,pgLateQ4],
			pgMissoutQ: [pgMissoutQ1,pgMissoutQ2,pgMissoutQ3,pgMissoutQ4],
			pgImproperQ: [pgImproperQ1,pgImproperQ2,pgImproperQ3,pgImproperQ4],
			pgTotalSamplesQ: [pgTotalSamplesQ1,pgTotalSamplesQ2,pgTotalSamplesQ3,pgTotalSamplesQ4],
			
			bsMissoutQ: [bsMissoutQ1,bsMissoutQ2,bsMissoutQ3,bsMissoutQ4],
			bsBunchQ: [bsBunchQ1,bsBunchQ2,bsBunchQ3,bsBunchQ4],
			bsUndercycleQ: [bsUndercycleQ1,bsUndercycleQ2,bsUndercycleQ3,bsUndercycleQ4],
			bsNoMarkQ: [bsNoMarkQ1,bsNoMarkQ2,bsNoMarkQ3,bsNoMarkQ4],
			bsTotalSamplesQ: [bsTotalSamplesQ1,bsTotalSamplesQ2,bsTotalSamplesQ3,bsTotalSamplesQ4],
			
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
			
			bskLowQ: [bskLowQ1,bskLowQ2,bskLowQ3,bskLowQ4],
			bskNoPonyQ: [bskNoPonyQ1,bskNoPonyQ2,bskNoPonyQ3,bskNoPonyQ4],
			bskShortQ: [bskShortQ1,bskShortQ2,bskShortQ3,bskShortQ4],
			bskLateQ: [bskLateQ1,bskLateQ2,bskLateQ3,bskLateQ4],
			bskNoPlasticQ: [bskNoPlasticQ1,bskNoPlasticQ2,bskNoPlasticQ3,bskNoPlasticQ4],
			bskImproperQ: [bskImproperQ1,bskImproperQ2,bskImproperQ3,bskImproperQ4],
			bskIncompleteQ: [bskIncompleteQ1,bskIncompleteQ2,bskIncompleteQ3,bskIncompleteQ4],
			bskNoSunburnQ: [bskNoSunburnQ1,bskNoSunburnQ2,bskNoSunburnQ3,bskNoSunburnQ4],
			bskTotalSamplesQ: [bskTotalSamplesQ1,bskTotalSamplesQ2,bskTotalSamplesQ3,bskTotalSamplesQ4],
			
			leafMissoutQ: [leafMissoutQ1,leafMissoutQ2,leafMissoutQ3,leafMissoutQ4],
			leafLateQ: [leafLateQ1,leafLateQ2,leafLateQ3,leafLateQ4],
			leafOverQ: [leafOverQ1,leafOverQ2,leafOverQ3,leafOverQ4],
			leafNonQ: [leafNonQ1,leafNonQ2,leafNonQ3,leafNonQ4],
			leafTotalSamplesQ: [leafTotalSamplesQ1,leafTotalSamplesQ2,leafTotalSamplesQ3,leafTotalSamplesQ4]
			
        }
		
		
		
		
		
				 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking)}%</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(pgLate + pgMissout + pgImproper)}%</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(bsMissout + bsBunch + bsUndercycle + bsNoMark)}%</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(fddoLateFirst + fddoLateFinal + fddoImproper + fddoExtreme + fddoFused + fddoSingle + fddoExcess + fddoMissout + fddoLate3to5 + fddoNonFollowing + fddoNoMark)}%</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(bskLow + bskNoPony + bskShort + bskLate + bskNoPlastic + bskImproper + bskIncomplete + bskNoSunburn)}%</h6></Col>
		 <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(leafMissout + leafLate + leafOver + leafNon)}%</h6></Col>

	  <Col xs={6} className="border border-dark rounded"><h6>{Math.floor(wholeBud + wholePropping + wholeBunch + wholeFddo + wholeBagsok + wholeLeaf) / 6}%</h6></Col>


// ====
	// ...
	// ====
	var wholeBud = bbLateInstallation+bbMissOut+bbLateRetrieval+bbImproperInstall+bbNoMarking
    var wholePropping = pgLate + pgMissout + pgImproper
    var wholeBunch = bsMissout + bsBunch + bsUndercycle + bsNoMark
    var wholeFddo = fddoLateFirst + fddoLateFinal + fddoImproper + fddoExtreme + fddoFused + fddoSingle + fddoExcess + fddoMissout + fddoLate3to5 + fddoNonFollowing + fddoNoMark
    var wholeBagsok = bskLow + bskNoPony + bskShort + bskLate + bskNoPlastic + bskImproper + bskIncomplete + bskNoSunburn
    var wholeLeaf = leafMissout + leafLate + leafOver + leafNon

	




