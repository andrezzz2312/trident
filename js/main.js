// Variables
let videoloop,
	video1,
	video2,
	video3,
	subVideo1,
	subVideo2,
	subVideo3,
	buttonContainerMade,
	buttonGrid,
	threesixty,
	delay,
	subVideoTurn,
	subVideoBackLoop,
	buttonDimensions,
	firstPage,
	rotationPage,
	textContent,
	label,
	labelCont,
	paragraph,
	titleH2,
	title1,
	createdSubTitle,
	span,
	line,
	svg1,
	circle,
	backButton,
	backButtonRotation,
	brandIcon,
	backButtonContainer,
	backButtonContainerRotation,
	buttonGridContainer,
	buttonFontvar,
	bigButtonFontvar,
	globalFontvar,
	containVideoWidth,
	containVideoHeight,
	pCont,
	pCont2,
	list,
	globalParent,
	pageIndex,
	pContent,
	pContent2

let boxVideo = []
let buttonShort = []
let dataId = []
let dataVariant = []
let video1check = false
let video2check = false
let video3check = false

let x = window.matchMedia('(max-height: 550px)')
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const subVideo1Container = document.querySelector('#subVideo1')
const subVideo2Container = document.querySelector('#subVideo2')
const subVideo3Container = document.querySelector('#subVideo3')
const subVideoTurnContainer = document.querySelector('#subVideoTurn')
const subVideoBackLoopContainer = document.querySelector('#subVideoBackLoop')
const rotation = document.querySelector('#rotation')
const rotationContainer = document.querySelector('#rotationContainer')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
// const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')
const titulo = document.querySelectorAll('.titulo')

// let details = navigator.userAgent
// let regexp = /android|iphone|kindle|ipad/i
// let ios = /iphone|ipad/i
// let macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
// let isMobileDevice = regexp.test(details)
// let isIOS = ios.test(details)
// let isMac = macosPlatforms.test(details)
let isMobile = false
window.mobileCheck = function () {
	let mobile = (function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			isMobile = true
	})(navigator.userAgent || window.opera)
	console.log(isMobile)
}
mobileCheck()
let isIOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
	isIOS = true
} else {
	isIOS = false
}

// var buttonsText = []
const machineButtonLayout = {
	gas: [
		{
			textLeft: '15%',
			textTop: '35%',
			title: `TriView®\nMarker Post`,
		},
		{
			textLeft: '25.5%',
			textBottom: '43%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textLeft: '39%',
			textBottom: '34%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textLeft: '51%',
			textBottom: '39%',
			title: `HideOut™\nTest Station`,
		},
		{
			textRight: '35%',
			textBottom: '31%',
			title: `ISO-Switch™`,
		},
		{
			textRight: '52%',
			textBottom: '8.5%',
			title: `PRO-TRACE®\nGrounding Rod`,
		},
		{
			textRight: '23%',
			textBottom: '15%',
			title: `Durable\nWire Connector`,
		},
		{
			textRight: '13%',
			textTop: '12%',
			title: `TracerLet\nTest Station`,
		},
		{
			textRight: '17%',
			textTop: '22%',
			title: `SoilMarkers™`,
		},
		{
			textRight: '22%',
			textTop: '28%',
			title: `Utility\nMarking Flags`,
		},
		{
			textRight: '26%',
			textTop: '45%',
			title: `Curb Markers`,
		},
	],
	telecom: [
		{
			textLeft: '17%',
			textTop: '7%',
			title: `Aerial Cable Marker`,
		},
		{
			textLeft: '3%',
			textTop: '22%',
			title: `Snaparound®\nCable Marker`,
		},

		{
			textLeft: '21%',
			textTop: '53%',
			title: `Aluminum\nUtility Pole Tag`,
		},
		{
			textRight: '71.5%',
			textBottom: '23%',
			title: `PRO-TRACE\u00AE\nGrounding Rod`,
		},
		{
			textLeft: '34%',
			textTop: '61%',
			title: `TriView®\nMarker Post`,
		},
		{
			textLeft: '46%',
			textBottom: '37%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textRight: '35%',
			textTop: '51%',
			title: `Curb Markers`,
		},
		{
			textLeft: '70%',
			textBottom: '32%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textRight: '4%',
			textTop: '40%',
			title: `Utility\nMarking Flags`,
		},
	],
	water: [
		{
			textLeft: '17%',
			textTop: '22%',
			title: `SoilMarkers™`,
		},

		{
			textLeft: '22%',
			textTop: '28%',
			title: `Utility\nMarking Flags`,
		},
		{
			textLeft: '26%',
			textTop: '45%',
			title: `Curb Markers`,
		},
		{
			textLeft: '70%',
			textTop: '32%',
			title: `Detectable\nWarning Tape`,
		},
		{
			textLeft: '21%',
			textTop: '53%',
			title: `Fire Hidrant `,
		},
		{
			textLeft: '13%',
			textTop: '12%',
			title: `TracerLet\nTest Station`,
		},
		{
			textLeft: '47%',
			textTop: '38%',
			title: `PRO-TRACE®\nTracer Wire`,
		},
		{
			textLeft: '23%',
			textTop: '15%',
			title: `Durable\nWire Connector`,
		},
	],
}
const machineSvgLayout = {
	gas: [
		{
			x1: '11%',
			y1: '43%',
			x2: '18%',
			y2: '38%',
		},
		{
			x1: '28%',
			y1: '65.5%',
			x2: '30%',
			y2: '54%',
		},
		{
			x1: '41%',
			y1: '72.5%',
			x2: '43%',
			y2: '61%',
		},
		{
			x1: '53.8%',
			y1: '73.5%',
			x2: '53.5%',
			y2: '56%',
		},
		{
			x1: '53.8%',
			y1: '76%',
			x2: '61%',
			y2: '66%',
		},
		{
			x1: '51.3%',
			y1: '83%',
			x2: '46%',
			y2: '90%',
		},
		{
			x1: '59.8%',
			y1: '83.5%',
			x2: '70%',
			y2: '81%',
		},
		{
			x1: '77.8%',
			y1: '43.2%',
			x2: '73%',
			y2: '47%',
		},
		{
			x1: '82%',
			y1: '34.7%',
			x2: '77%',
			y2: '32%',
		},
		{
			x1: '87.5%',
			y1: '24.5%',
			x2: '81%',
			y2: '24%',
		},
		{
			x1: '90%',
			y1: '18%',
			x2: '85%',
			y2: '15%',
		},
	],
	telecom: [
		{
			x1: '19%',
			y1: '9%',
			x2: '11%',
			y2: '9.5%',
		},
		{
			x1: '6%',
			y1: '24%',
			x2: '6.9%',
			y2: '8.1%',
		},
		{
			x1: '23%',
			y1: '54%',
			x2: '16.2%',
			y2: '63.6%',
		},
		{
			x1: '23%',
			y1: '75%',
			x2: '26.3%',
			y2: '81.1%',
		},
		{
			x1: '39%',
			y1: '64%',
			x2: '31.5%',
			y2: '73%',
		},
		{
			x1: '51%',
			y1: '62%',
			x2: '54%',
			y2: '69%',
		},
		{
			x1: '75%',
			y1: '65%',
			x2: '67%',
			y2: '57.4%',
		},
		{
			x1: '64%',
			y1: '54%',
			x2: '69.5%',
			y2: '49.5%',
		},
		{
			x1: '93%',
			y1: '42%',
			x2: '86%',
			y2: '34%',
		},
	],
	water: [
		{
			x1: '19%',
			y1: '9%',
			x2: '11%',
			y2: '9.5%',
		},
		{
			x1: '6%',
			y1: '24%',
			x2: '6.9%',
			y2: '8.1%',
		},
		{
			x1: '23%',
			y1: '54%',
			x2: '16.2%',
			y2: '63.6%',
		},
		{
			x1: '23%',
			y1: '75%',
			x2: '26.3%',
			y2: '81.1%',
		},
		{
			x1: '39%',
			y1: '64%',
			x2: '31.5%',
			y2: '73%',
		},
		{
			x1: '53%',
			y1: '60%',
			x2: '56%',
			y2: '67.6%',
		},
		{
			x1: '75%',
			y1: '65%',
			x2: '68%',
			y2: '57.1%',
		},
		{
			x1: '64%',
			y1: '54%',
			x2: '71.9%',
			y2: '46.2%',
		},
		{
			x1: '93%',
			y1: '42%',
			x2: '86%',
			y2: '34%',
		},
	],
}
const buttonContent = {
	gas: {
		textLeft: '0%',
		textBottom: '0%',
		title: `GAS / OIL`,
		subTitle: `Select a product to learn more about Trident’s suite of solutions for location and marking.
		`,

		inputButtonGrid: [
			`triviewM`,
			`detectableW`,
			`protraceT`,
			`hideoutT`,
			`isoS`,
			`protraceG`,
			`durableW`,
			`tracerletT`,
			`soilM`,
			`utilityM`,
			`curbM`,
		],
		boxInfo: {
			triviewM: {
				textLeft: '0%',
				textTop: '0%',
				title: `TriView® Marker Post`,

				content: [
					`The industry’s best marker for creating awareness of buried facilities and reminding excavators to call before they dig`,
					`Triangular profile combined with internal Flex PLUS™ rod makes the TriView®­ the most durable marker post available`,
					`360-degree visibility`,
					`Made with RhinoPoly® — our proprietary blend of thermoplastics`,
					`Patented TriGrip™ Anchor for locking post into ground`,
					`Performs in temperatures ranging from -40° F to +150° F`,
					`UV stable, designed for 10+ years of outdoor use with our 10-year warranty`,
					`Available as a test station with removable cap that offers easy access to tracer wire`,
				],
			},
			detectableW: {
				textLeft: '0%',
				textTop: '0%',
				title: `Detectable\nWarning Tape`,

				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			protraceT: {
				textLeft: '0%',
				textTop: '0%',
				title: `Pro-Trace® CCS\nTracer Wire`,

				content: [
					`Used for tracer wire applications to conductively locate buried utility lines for gas, water, sewer, telecommunication, and electrical markets. Designed to embody the flexibility, memory, and feel of copper`,
					`Has a 50% higher break-load, minimizing damage during installation and while in service`,
					`For installation in open-trench, plow-in, or inside conduit using one wire`,
					`Equal to copper in signal performance, lower in cost, and great price stability`,
					`RoHS Compliant and works with connectors you already use`,
					`Various tracer wire options available to meet different applications including open cut, horizontal directional drilling, and pipe bursting`,
				],
			},
			hideoutT: {
				textLeft: '0%',
				textTop: '0%',
				title: `HideOut™\nTest Station`,

				content: [
					`Provides easy access to tracer wire in spots where upright posts are not practical`,
					`Flush-mounted test station ideal for areas where mowers are prevalent`,
					`Telescoping terminal board provides easy access to terminals for locators`,
					`Comes standard with two terminals and features industry-standard 11-hole pattern`,
					`Locking lid with metal plate makes HideOut™ easy to locate`,
					`Hot-stamped graphics`,
					`Patented TriGrip Anchor™ for securing HideOut™ into the ground`,
				],
			},
			isoS: {
				textLeft: '0%',
				textTop: '0%',
				title: `ISO-Switch™`,

				content: [
					`Can significantly speed up locating by allowing the locator tech to connect to all the facilities at one time with the flick of a switch`,
					`Shunts or jumps each one of the laterals with the ground without the need for any external hardware`,
					`Simplifies the locating setup, saving time and labor without the hassles of manipulating terminal hardware`,
					`Can be integrated into a variety of access points: Tri-View Test Station, RhinoDome Test Station, HideOut, Tracer Pit Handholes, and more`,
				],
			},
			protraceG: {
				textLeft: '0%',
				textTop: '0%',
				title: `PRO-TRACE®\nGrounding Rod`,

				content: [
					`Grounds the dead end of tracer wire to complete the circuit for accurate location`,
					`1.5-pound, drive-in, magnesium ground rod designed for tracer wire systems`,
					`Twist-on connector included to splice lead wire to tracer wire`,
					`20 feet of built-in lead wire allows for placement flexibility`,
					`HDPW cap improves drivability into the earth and is simple to install`,
				],
			},
			durableW: {
				textLeft: '0%',
				textTop: '0%',
				title: `Durable Wire\nConnectors`,

				content: [
					`A locate system is only as good as its weakest connection, so it’s imperative to use waterproof and corrosion-proof connectors to protect your tracer wire splices. Different scenarios call for different connectors, which is why Trident has a variety of options to best fit your needs`,
					`1. PRO-TRACE TW CONNECTORS: Used to splice or branch-off multiple tracer wires`,
					`2. TRACERLOCK CONNECTORS: Engineered for direct-bury applications, no stripping required`,
					`3. LOCKING BARREL CONNECTORS: Innovative twist and lock design allows for efficient connecting`,
					`4. TWIST CONNECTORS: Waterproof connectors that are fast and easy to install`,
					`5. MTS CONNECTORS: Mainline-to-service connectors eliminate the need to cut the mainline`,
					`6. WIRE NUT & TUBE CONNECTORS: Snap-fit lid provides maximum strain relief on wire splices`,
					`7. TWIST ON WITH STRAIN RELIEF CONNECTORS: Ideal for connecting wire in direct-bury applications`,
				],
			},
			curbM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Curb Markers`,

				content: [
					`Durable surface markers that can be attached to almost any surface`,
					`Can be printed on reflective or non-reflective substrates`,
					`Printed with UV stable inks on a rigid, calendered vinyl and then given a polyurethane dome`,
					`Easily installed with our industrial adhesive`,
					`Temperature and UV stable`,
					`Impact and abrasion resistant`,
				],
			},
			utilityM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Utility Marking Flags`,

				content: [
					`Ensure consistent communication and long-lasting visibility for your project`,
					`Can be custom printed to include company logos or generic warning legends to enhance communication for your project`,
					`Available in 2” x 3” and 4” x 5” sizes, with staffs available in steel`,
					`Staffs are constructed of high-carbon alloy steel and available in a wide range of lengths`,
				],
			},
			soilM: {
				textLeft: '0%',
				textTop: '0%',
				title: `7-Inch SoilMarkers™`,

				content: [
					`Flush mounted, highly visible, and low-profile for where upright markers are not practical. Walk on it, mow over it, or even drive over it`,
					`7” round disk with a 13” stake that has two barbs`,
					`Temperature stable/UV stable`,
					`Impact-resistant polypropylene disk`,
					`Reinforced polypropylene thermoplastic stake`,
					`Hot-stamped warning legend is molded into the disk`,
				],
			},
			tracerletT: {
				textLeft: '0%',
				textTop: '0%',
				title: `TracerLet Test Station`,

				content: [
					`Above-ground test station head for mounting on new or existing PVC conduit`,
					`Protects tracer wire ends from corrosion and the elements`,
					`Made with high strength polycarbonate`,
					`Use with any 1” PVC conduit`,
					`Ideal for end of service termination and aesthetics`,
					`Available with 1-4 terminals`,
					`Fire hydrant flange mounting kit available (adapter, bracket, and fasteners)`,
				],
			},
		},
	},
	telecom: {
		textLeft: '0%',
		textBottom: '0%',
		title: `TELECOM`,
		subTitle: `Select a product to learn more about Trident’s suite of solutions for location and marking.
		`,

		inputButtonGrid: [
			`aerialC`,
			`snaparoundC`,
			`aluminumU`,
			`protraceG`,
			`triviewM`,
			`protraceT`,
			`curbM`,
			`detectableW`,
			`utilityM`,
		],

		boxInfo: {
			aerialC: {
				textLeft: '0%',
				textTop: '0%',
				title: `Aerial Cable Markers`,

				content: [
					`Easily identify aerial cables from the ground`,
					`UV stable and outdoor durable PVC marker and label`,
					`Adhesive strip along inside of clip ensures the marker won’t spin`,
					`Telecommunications Orange — dimensions: 6”W x 1.625”H`,
				],
			},
			snaparoundC: {
				textLeft: '0%',
				textTop: '0%',
				title: `Snaparound®\nCable Markers`,

				content: [
					`Outdoor durable, UV, solvent, and water resistant`,
					`Custom sizes, colors, and messaging`,
					`Mount around metal pipes, wires, and cables`,
					`RFID available`,
				],
			},
			aluminumU: {
				textLeft: '0%',
				textTop: '0%',
				title: `Aluminum\nUtility Pole Tags`,

				content: [
					`Clearly identify your utility poles with embossed metal characters`,
					`Aluminum construction for outdoor durability`,
					`Common character height: 1”, 3” and 6” tall`,
					`1” vertical or horizontal orientation available`,
				],
			},
			protraceG: {
				textLeft: '0%',
				textTop: '0%',
				title: `PRO-TRACE®\nGrounding Rod`,

				content: [
					`Grounds the dead end of tracer wire to complete the circuit for accurate location`,
					`1.5-pound, drive-in, magnesium ground rod designed for tracer wire systems`,
					`Twist-on connector included to splice lead wire to tracer wire`,
					`20 feet of built-in lead wire allows for placement flexibility`,
					`HDPW cap improves drivability into the earth and is simple to install`,
				],
			},
			triviewM: {
				textLeft: '0%',
				textTop: '0%',
				title: `TriView® Marker Post`,

				content: [
					`The industry’s best marker for creating awareness of buried facilities and reminding excavators to call before they dig`,
					`Triangular profile combined with internal Flex PLUS™ rod makes the TriView®­ the most durable marker post available`,
					`360-degree visibility`,
					`Made with RhinoPoly® — our proprietary blend of thermoplastics`,
					`Patented TriGrip™ Anchor for locking post into ground`,
					`Performs in temperatures ranging from -40° F to +150° F`,
					`UV stable, designed for 10+ years of outdoor use with our 10-year warranty`,
					`Available as a test station with removable cap that offers easy access to tracer wire`,
				],
			},
			protraceT: {
				textLeft: '0%',
				textTop: '0%',
				title: `Pro-Trace® CCS\nTracer Wire`,

				content: [
					`Used for tracer wire applications to conductively locate buried utility lines for gas, water, sewer, telecommunication, and electrical markets. Designed to embody the flexibility, memory, and feel of copper`,
					`Has a 50% higher break-load, minimizing damage during installation and while in service`,
					`For installation in open-trench, plow-in, or inside conduit using one wire`,
					`Equal to copper in signal performance, lower in cost, and great price stability`,
					`RoHS Compliant and works with connectors you already use`,
					`Various tracer wire options available to meet different applications including open cut, horizontal directional drilling, and pipe bursting`,
				],
			},
			curbM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Curb Markers`,

				content: [
					`Durable surface markers that can be attached to almost any surface`,
					`Can be printed on reflective or non-reflective substrates`,
					`Printed with UV stable inks on a rigid, calendered vinyl and then given a polyurethane dome`,
					`Easily installed with our industrial adhesive`,
					`Temperature and UV stable`,
					`Impact and abrasion resistant`,
				],
			},
			detectableW: {
				textLeft: '0%',
				textTop: '0%',
				title: `Detectable\nWarning Tape`,

				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			utilityM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Utility Marking Flags`,

				content: [
					`Ensure consistent communication and long-lasting visibility for your project`,
					`Can be custom printed to include company logos or generic warning legends to enhance communication for your project`,
					`Available in 2” x 3” and 4” x 5” sizes, with staffs available in steel`,
					`Staffs are constructed of high-carbon alloy steel and available in a wide range of lengths`,
				],
			},
		},
	},
	water: {
		textLeft: '0%',
		textBottom: '0%',
		title: `WATER`,
		subTitle: `Select a product to learn more about Trident’s suite of solutions for location and marking.
		`,

		inputButtonGrid: [
			`soilM`,
			`utilityM`,
			`curbM`,
			`detectableW`,
			`fireH`,
			`tracerletT`,
			`protraceT`,
			`durableW`,
		],

		boxInfo: {
			soilM: {
				textLeft: '0%',
				textTop: '0%',
				title: `7-Inch SoilMarkers™`,

				content: [
					`Flush mounted, highly visible, and low-profile for where upright markers are not practical. Walk on it, mow over it, or even drive over it`,
					`7” round disk with a 13” stake that has two barbs`,
					`Temperature stable/UV stable`,
					`Impact-resistant polypropylene disk`,
					`Reinforced polypropylene thermoplastic stake`,
					`Hot-stamped warning legend is molded into the disk`,
				],
			},
			utilityM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Utility Marking Flags`,

				content: [
					`Ensure consistent communication and long-lasting visibility for your project`,
					`Can be custom printed to include company logos or generic warning legends to enhance communication for your project`,
					`Available in 2” x 3” and 4” x 5” sizes, with staffs available in steel`,
					`Staffs are constructed of high-carbon alloy steel and available in a wide range of lengths`,
				],
			},
			curbM: {
				textLeft: '0%',
				textTop: '0%',
				title: `Curb Markers`,

				content: [
					`Durable surface markers that can be attached to almost any surface`,
					`Can be printed on reflective or non-reflective substrates`,
					`Printed with UV stable inks on a rigid, calendered vinyl and then given a polyurethane dome`,
					`Easily installed with our industrial adhesive`,
					`Temperature and UV stable`,
					`Impact and abrasion resistant`,
				],
			},
			detectableW: {
				textLeft: '0%',
				textTop: '0%',
				title: `Detectable\nWarning Tape`,

				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			fireH: {
				textLeft: '0%',
				textTop: '0%',
				title: `Detectable\nWarning Tape`,

				content: [
					`Endures temperatures from -60°F to 250°F`,
					`Permanently imprinted with black ink to last the lifetime of the product`,
					`Incredibly strong and promises long-term durability`,
					`Wide variety of APEA colors, allowing you to select the ideal hue for your needs`,
					`Aluminum core is detected through means of inductive locating`,
				],
			},
			tracerletT: {
				textLeft: '0%',
				textTop: '0%',
				title: `TracerLet Test Station`,

				content: [
					`Above-ground test station head for mounting on new or existing PVC conduit`,
					`Protects tracer wire ends from corrosion and the elements`,
					`Made with high strength polycarbonate`,
					`Use with any 1” PVC conduit`,
					`Ideal for end of service termination and aesthetics`,
					`Available with 1-4 terminals`,
					`Fire hydrant flange mounting kit available (adapter, bracket, and fasteners)`,
				],
			},
			protraceT: {
				textLeft: '0%',
				textTop: '0%',
				title: `Pro-Trace® CCS\nTracer Wire`,

				content: [
					`Used for tracer wire applications to conductively locate buried utility lines for gas, water, sewer, telecommunication, and electrical markets. Designed to embody the flexibility, memory, and feel of copper`,
					`Has a 50% higher break-load, minimizing damage during installation and while in service`,
					`For installation in open-trench, plow-in, or inside conduit using one wire`,
					`Equal to copper in signal performance, lower in cost, and great price stability`,
					`RoHS Compliant and works with connectors you already use`,
					`Various tracer wire options available to meet different applications including open cut, horizontal directional drilling, and pipe bursting`,
				],
			},
			durableW: {
				textLeft: '0%',
				textTop: '0%',
				title: `Durable Wire\nConnectors`,

				content: [
					`A locate system is only as good as its weakest connection, so it’s imperative to use waterproof and corrosion-proof connectors to protect your tracer wire splices. Different scenarios call for different connectors, which is why Trident has a variety of options to best fit your needs`,
					`1. PRO-TRACE TW CONNECTORS: Used to splice or branch-off multiple tracer wires`,
					`2. TRACERLOCK CONNECTORS: Engineered for direct-bury applications, no stripping required`,
					`3. LOCKING BARREL CONNECTORS: Innovative twist and lock design allows for efficient connecting`,
					`4. TWIST CONNECTORS: Waterproof connectors that are fast and easy to install`,
					`5. MTS CONNECTORS: Mainline-to-service connectors eliminate the need to cut the mainline`,
					`6. WIRE NUT & TUBE CONNECTORS: Snap-fit lid provides maximum strain relief on wire splices`,
					`7. TWIST ON WITH STRAIN RELIEF CONNECTORS: Ideal for connecting wire in direct-bury applications`,
				],
			},
		},
	},
}

const rotationContent = {
	turnlock10:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock100/Turnlock100.spin?fullscreen=false',
	turnlock15:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock150/Turnlock150.spin?fullscreen=false',
	tourlock18:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	tourlock182:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	lifelineSw:
		'https://rotation.marketscale.com/Companies/BoonEdam/LifeLineSwing/LifeLineSwing.spin?fullscreen=false',
	circlelockSo:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	circlelockSo2:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	trilock60:
		'https://rotation.marketscale.com/Companies/BoonEdam/TriLock60/TriLock60.spin?fullscreen=false',
}
// Display fullscreen button
if (!isMobile) {
	fullscreen_button.style.display = 'none'
} else if (isIOS) {
	fullscreen_button.style.display = 'none'
}

// else {
// if (isIOS) {
// 	fullscreen_button.style.display = 'none'
// }
// }

// if (isMac) {
// 	alertdiv.style.display = 'flex'
// }

// Set which videos are going to swap

function createButtons(e, i) {
	const centerContainer = document.createElement('div')
	const buttonContainer = document.createElement('div')
	const createdButton = document.createElement('button')

	centerContainer.classList.add('centerContainer')
	buttonContainer.classList.add('buttonContainer')
	createdButton.classList.add(
		'subButton'
		// , 'mainMenuB'
	)
	createdButton.style.fontSize = globalFontvar
	createdButton.textContent = e.title
	createdButton.style.left = e.textLeft
	createdButton.style.right = e.textRight
	createdButton.style.top = e.textTop
	createdButton.style.bottom = e.textBottom

	buttonGridContainer.appendChild(centerContainer)
	centerContainer.appendChild(buttonContainer)
	buttonContainer.appendChild(createdButton)
}

function createSvgs(e, i) {
	const centerContainer = document.createElement('div')
	centerContainer.setAttribute('id', 'svg')
	const svgContainer = document.createElement('div')
	const createdSvg = document.createElementNS(
		'http://www.w3.org/2000/svg',
		'svg'
	)
	const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
	// const circle = document.createElementNS(
	// 	'http://www.w3.org/2000/svg',
	// 	'circle'
	// )

	centerContainer.classList.add('centerContainer')
	svgContainer.classList.add('svgContainer')
	createdSvg.classList.add('svg')
	createdSvg.style.width = '100%'
	createdSvg.style.height = '100%'

	line.setAttribute('stroke', '#ffff')
	line.setAttribute('stroke-width', '3')
	line.setAttribute('x1', e.x1)
	line.setAttribute('y1', e.y1)
	line.setAttribute('x2', e.x2)
	line.setAttribute('y2', e.y2)

	// circle.classList.add('svgDot')
	// circle.setAttribute('r', '6px')
	// circle.setAttribute('fill', '#f04923')
	// circle.setAttribute('
	// circle.setAttribute('cy', e.cy)

	buttonGridContainer.appendChild(centerContainer)
	centerContainer.appendChild(svgContainer)
	svgContainer.appendChild(createdSvg)
	createdSvg.appendChild(line)
	// createdSvg.appendChild(circle)
}
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
	if (videoToPause) {
		videoToPause.pause()
	}

	videoToVanish.classList.add('short-vanish')

	videoToPlay.style.opacity = 1
	setTimeout(() => {
		videoToPlay.play()
	}, 0)
}

// loop.currentTime = 60
// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
	mainButtons.classList.toggle('show')
	mainButtons.classList.toggle('disabled')
	mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

// Set animations for the buttons
function animations() {
	console.trace()
	if (pCont) {
		const elementContainers = document.querySelectorAll('.elementContainer')

		// titleH2.style.animation = 'show 0.5s ease-out forwards'

		createdSubTitle.style.animation = 'show 0.5s ease-out forwards'
		// createdSubTitle.style.animationDelay = '0.4s'
		let counter = 0.3

		if (delay) {
			console.log(delay)
			let inputArray = []
			let bool = false
			subVideo2.addEventListener('timeupdate', function () {
				console.log(subVideo2.currentTime)
				//currentTime use second, if you want min *60

				delay.forEach((element, i) => {
					if (Math.floor(subVideo2.currentTime) === element) {
						if (inputArray.length === 0) {
							elementContainers[i].style.animation =
								'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

							inputArray.push(Math.floor(subVideo2.currentTime))
							console.log(inputArray)
						} else {
							if (
								element ===
								inputArray.find((num) => {
									return num === element
								})
							) {
							} else {
								if (pageIndex === 'piggybackingP') {
									if (Math.floor(subVideo2.currentTime) === 36) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else if (pageIndex === 'tailgatingP1') {
									if (Math.floor(subVideo2.currentTime) === 35) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else if (pageIndex === 'tailgatingP2') {
									if (Math.floor(subVideo2.currentTime) === 30) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo2.currentTime))
									}
								} else {
									elementContainers[i].style.animation =
										'fadein 0.5s ease-in-out forwards'
									inputArray.push(Math.floor(subVideo2.currentTime))
								}

								console.log(inputArray)
							}
						}
					}
					// console.log(pageIndex)
				})

				if (inputArray.length === delay.length && !bool) {
					let removeCount = inputArray.length
					let elementContainersArray = Array.from(elementContainers)
					// console.log(elementContainersArray)
					elementContainersArray.splice(0, removeCount)

					elementContainersArray.forEach((element, i) => {
						element.style.animation =
							'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
						// element.style.animationDelay = `${counter}s`
						// counter += 0.2
					})
					bool = true
				}
			})
		} else {
			console.log('else delay')
			console.log(pageIndex)
			if (pageIndex === 'mainMenuFront') {
				titleH2.style.animation = 'show 0.5s ease-out forwards'
			} else {
				titleH2.style.animation =
					'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
				titleH2.style.animationDelay = `${counter}s`
				counter += 0.1
			}

			elementContainers.forEach((element, i) => {
				element.style.animation =
					'fadein 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'

				element.style.animationDelay = `${counter}s`
				counter += 0.1
			})
		}

		// buttonGridContainer.style.animation = 'show 0.5s ease-out forwards'
		// buttonGridContainer.style.animationDelay = `${counter}s`
		backButtonContainer.style.animation = 'show 0.5s ease-out forwards'
		brandIcon.style.animation = 'show 0.5s ease-out forwards'
		// brandIcon.style.animationDelay = `${counter}s`
		// backButtonContainer.style.animationDelay = `${counter}s`
	}

	if (boxVideo) {
		boxVideo.forEach((e, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()

		video1Container.appendChild(video1)
	}

	if (source2) {
		video2 = document.createElement('video')
		video2.src = source2
		video2.loop = true
		video2.muted = true
		video2.setAttribute('playsinline', 'playsinline')

		video2.controls = false
		video2.autoplay = true
		video2.classList.add('video')
		video2.style.opacity = 0
		video2.pause()

		video2Container.appendChild(video2)
	}
	if (source3) {
		video3 = document.createElement('video')
		video3.src = source3
		video3.muted = true
		video3.autoplay = true
		video3.setAttribute('playsinline', 'playsinline')
		video3.controls = false
		video3.classList.add('video')
		video3.style.opacity = 0
		video3.pause()

		video3Container.appendChild(video3)
	}
}

function createSubVideos(source1, source2, source3) {
	if (source1) {
		subVideo1 = document.createElement('video')
		subVideo1.src = source1
		subVideo1.muted = true
		subVideo1.setAttribute('playsinline', 'playsinline')
		subVideo1.controls = false
		subVideo1.autoplay = true
		subVideo1.classList.add('video')
		subVideo1.style.opacity = 0
		subVideo1.pause()

		subVideo1Container.appendChild(subVideo1)
	}

	if (source2) {
		subVideo2 = document.createElement('video')
		subVideo2.src = source2
		// if (
		// 	currentButton === 'turnlock10' ||
		// 	currentButton === 'turnlock15' ||
		// 	currentButton === 'tourlock18' ||
		// 	currentButton === 'tourlock182' ||
		// 	currentButton === 'circlelockSo' ||
		// 	currentButton === 'circlelockSo2' ||
		// 	currentButton === 'lifelineSw' ||
		// 	currentButton === 'trilock60'
		// ) {
		// 	if (pageIndex === 'protraceG') {
		// 		subVideo2.loop = true
		// 	}
		// }
		if (
			pageIndex === 'protraceG' ||
			pageIndex === 'hideoutT' ||
			pageIndex === 'snaparoundC'
		) {
			subVideo2.loop = true
		}

		subVideo2.muted = true
		subVideo2.setAttribute('playsinline', 'playsinline')
		subVideo2.controls = false
		subVideo2.autoplay = true
		subVideo2.classList.add('subVideo')
		subVideo2.style.opacity = 0
		subVideo2.pause()
		// loopContainer.appendChild(subVideo2)
		subVideo2Container.appendChild(subVideo2)
	}
	if (source3) {
		subVideo3 = document.createElement('video')
		subVideo3.src = source3
		subVideo3.muted = true
		subVideo3.autoplay = true
		subVideo3.setAttribute('playsinline', 'playsinline')
		subVideo3.controls = false
		subVideo3.classList.add('subVideo')
		subVideo3.style.opacity = 0
		subVideo3.pause()
		// loopContainer.appendChild(subVideo3)
		subVideo3Container.appendChild(subVideo3)
	}
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(obj, parent) {
	console.trace()
	delay = ''
	console.log(obj)
	textLeft = obj.textLeft
	textTop = obj.textTop
	textRight = obj.textRight
	textBottom = obj.textBottom
	labelTitle = obj.title
	pContent = obj.content
	pContent2 = obj.content2
	subTitle = obj.subTitle
	inputButtonGrid = obj.inputButtonGrid
	// inputButtonId = obj.inputButtonId
	delayInput = obj.delay

	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	firstPage = document.createElement('div')
	firstPage.classList.add('firstPage')

	firstPage.style.right = textRight
	firstPage.style.top = textTop
	firstPage.style.left = textLeft
	firstPage.style.bottom = textBottom

	textContent = document.createElement('div')
	textContent.classList.add('text')
	console.log(pageIndex)
	if (pageIndex !== 'mainMenuFront') {
		textContent.style.justifyContent = 'flex-end'
	}
	textContent.style.justifyContent = 'flex-start'
	buttonGridContainer = document.createElement('div')
	buttonGridContainer.classList.add('buttonGridContainer')

	console.log(parent)
	console.log(machineButtonLayout[parent])

	if (labelTitle) {
		pCont = document.createElement('div')
		pCont.classList.add('pCont')
		if (pageIndex === 'snaparoundC') {
			pCont.style.paddingBottom = '40%'
		}

		titleH2 = document.createElement('span')
		titleH2.classList.add('header')
		titleH2.style.fontSize = globalBigTitleFontvar
		title1 = document.createElement('span')
		title1.classList.add('title1')
		title1.textContent = labelTitle
		if (pageIndex !== 'mainMenuFront') {
			createBackButton()
			firstPage.style.flexDirection = 'row'
		}

		titleH2.appendChild(title1)
		if (subTitle) {
			createdSubTitle = document.createElement('span')
			createdSubTitle.classList.add('createdSubtitle')
			createdSubTitle.textContent = subTitle
			createdSubTitle.style.fontWeight = 'bold'
			createdSubTitle.style.fontSize = globalFontvar
			titleH2.appendChild(createdSubTitle)
		}
		pCont.appendChild(titleH2)
		// el unico vivo

		if (Array.isArray(pContent)) {
			paragraph = document.createElement('p')
			if (delayInput) {
				delay = delayInput
			}
			console.log(currentButton)
			pContent.forEach((e) => {
				if (Number.isInteger(e)) {
					elementContainer = document.createElement('span')
					elementContainer.classList.add('elementContainer', 'imageContainer')
					for (let i = 0; i < e; i++) {
						let image = document.createElement('img')
						image.classList.add('tableImg')
						if (
							currentButton === 'tourlock18' ||
							currentButton === 'tourlock182' ||
							currentButton === 'circlelockSo' ||
							currentButton === 'circlelockSo2'
						) {
							image.src = `assets/${parent}/${currentButton}/${currentButton}${
								i + 1
							}.png`
							if (isMobile) {
								image.style.width = '20em'
							} else {
								image.style.width = '24em'
							}
						} else {
							image.src = `assets/${parent}/${pageIndex}/${pageIndex}${
								i + 1
							}.png`
							if (isMobile) {
								image.style.width = '6em'
							} else {
								image.style.width = '6em'
							}
						}

						elementContainer.appendChild(image)
						paragraph.appendChild(elementContainer)
						pCont.appendChild(paragraph)
					}
				} else {
					elementContainer = document.createElement('span')
					elementContainer.classList.add('elementContainer')
					elementContainer.setAttribute('id', 'pCont1')

					// icon = document.createElement('img')
					// icon.src = 'assets/icons/bp.png'
					// icon.style.width = '1.3em'
					icon = document.createElement('span')
					icon.classList.add('icon')
					icon.textContent = `\u2022`
					icon.style.fontSize = bodyFontvar

					element = document.createElement('span')
					element.textContent = e
					element.style.fontSize = bodyFontvar
					if (pageIndex !== 'durableW') {
						elementContainer.appendChild(icon)
					}

					elementContainer.appendChild(element)
					paragraph.appendChild(elementContainer)
					pCont.appendChild(paragraph)
				}
			})
		}

		if (pContent2) {
			if (Array.isArray(pContent2)) {
				if (delayInput) {
					delay = delayInput
				}
				console.log(currentButton)
				pContent2.forEach((e) => {
					if (Number.isInteger(e)) {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer', 'imageContainer')
						for (let i = 0; i < e; i++) {
							let image = document.createElement('img')
							image.classList.add('extraImg')
							if (
								currentButton === 'tourlock18' ||
								currentButton === 'tourlock182' ||
								currentButton === 'circlelockSo' ||
								currentButton === 'circlelockSo2'
							) {
								image.src = `assets/${parent}/${currentButton}/${currentButton}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '20em'
								} else {
									image.style.width = '25em'
								}
							} else {
								image.src = `assets/${parent}/${pageIndex}/${pageIndex}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '8em'
								} else {
									image.style.width = '6em'
								}
							}

							elementContainer.appendChild(image)
							paragraph.appendChild(elementContainer)
						}
					} else {
						console.log('else')
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer')
						elementContainer.setAttribute('id', 'pCont2')
						icon = document.createElement('img')
						icon.src = 'assets/icons/bp.png'
						icon.style.width = '1.3em'

						element = document.createElement('span')
						element.textContent = e
						element.style.fontSize = globalFontvar
						elementContainer.appendChild(icon)
						elementContainer.appendChild(element)
						paragraph.appendChild(elementContainer)
						pCont.appendChild(paragraph)
					}
				})
			}
		}

		textContent.appendChild(pCont)
	}

	firstPage.appendChild(textContent)
	// buttonGridContainer.appendChild(buttonGrid)

	showCont.appendChild(buttonGridContainer)

	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(firstPage)
	if (pageIndex === 'mainMenuFront') {
		createBackButton()
	}

	if (inputButtonGrid) {
		machineButtonLayout[parent].forEach((e, i) => {
			console.log(e)
			createButtons(e, i)
		})
		machineSvgLayout[parent].forEach((element, i) => {
			createSvgs(element, i)
		})
	}
	// machineButtonLayout[parent].forEach((element, i) => {
	// 	// console.log(element)
	// 	// createButtons(element, i)
	// })
	// machineSvgLayout[parent].forEach((element, i) => {
	// 	createSvgs(element, i)
	// })
	const subButtons = document.querySelectorAll('.subButton')
	console.log(subButtons)
	subButtons.forEach((element, i) => {
		element.addEventListener('click', function () {
			HideShowCont()

			setTimeout(() => {
				showCont.innerHTML = ''
			}, 500)

			buttonShort[i] = inputButtonGrid[i]
			pageIndex = buttonShort[i]
			// 	// Con esto veo que boton es /////////////////////////////////
			console.log(buttonShort[i])
			createSubVideos(
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}1.mp4`,
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}2.mp4`,
				`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}3.mp4`
			)
			check1()
			let videosCheck = false
			function check1() {
				clearcheck = setInterval(repeatcheck, 600)
				function repeatcheck() {
					if (
						subVideo1.readyState === 4 &&
						subVideo2.readyState === 4 &&
						subVideo3.readyState === 4
					) {
						videosCheck = true
					}
					setTimeout(() => {
						if (!videosCheck) {
							loader.style.zIndex = '200'
							loader.classList.add('show')
						}
					}, 3000)
					if (videosCheck) {
						loader.classList.remove('show')
						loader.classList.add('short-vanish')
						loader.style.zIndex = '-200'
						clearInterval(clearcheck)
						// console.log('creando contenido')
						// console.log(parent)
						globalParent = parent

						createContent(buttonContent[parent].boxInfo[pageIndex], parent)
						textContent.style.height = '100%'
						video2.classList.add('short-vanish')
						subVideo1.style.opacity = 1
						setTimeout(() => {
							subVideo1.play()
							subVideo1.addEventListener('ended', () => {
								console.log('subVideo1 ending')

								animations()
								InterpolateVideo(video3, subVideo1, subVideo2)

								HideShowCont()
							})
						}, 0)
					}
				}
			}
		})
	})

	ArreglarLineas()
	const subButton = document.querySelectorAll('.subButton')
	switch (labelTitle) {
		case 'GAS / OIL':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = '#efe329'
			textContent.style.alignItems = 'flex-start'
			subButton.forEach((element) => {
				element.style.backgroundColor = '#efe329'
			})
			break
		case 'WATER':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = '#297def'
			titleH2.style.alignItems = 'flex-end'
			textContent.style.alignItems = 'flex-start'
			textContent.style.justifyContent = 'flex-end'
			subButton.forEach((element) => {
				element.style.backgroundColor = '#297def'
			})

			console.log("It's an apple.")
			break
		case 'TELECOM':
			title1.style.padding = '0.25em 0.5em'
			title1.style.fontSize = globalMediumTitleFontvar
			title1.style.color = 'black'
			title1.style.backgroundColor = '#efa229'
			titleH2.style.alignItems = 'flex-end'
			textContent.style.alignItems = 'flex-start'
			textContent.style.justifyContent = 'flex-end'
			subButton.forEach((element) => {
				element.style.backgroundColor = '#efa229'
			})

			break
		case 'ELECTRIC':
			console.log("It's an orange.")
			break
		default:
			console.log("It's something else.")
	}
}
// asd
// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function setFontSizes() {
	const button = document.querySelectorAll('.button')
	const mainButtons = document.querySelectorAll('.mainMenuB')

	const titulo = document.querySelector('.titulo')
	const mainTextBox = document.querySelector('.mainTextBox')

	globalFontvar = `calc(5px + (15 - 5) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	bodyFontvar = `calc(6px + (20 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalTitleFontvar = `calc(8px + (22 - 8) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalMediumTitleFontvar = `calc(7px + (39 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalBigTitleFontvar = `calc(15px + (44 - 15) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	buttonFontvar = `calc(6px + (22 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	bigButtonFontvar = `calc(8px + (26 - 8) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	mainTextBox.style.fontSize = globalFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = buttonFontvar
	}

	for (let i = 0; i < mainButtons.length; i++) {
		mainButtons[i].style.fontSize = bigButtonFontvar
	}
}

function createRotation() {
	console.log(currentButton)
	console.log(pageIndex)

	loader.classList.remove('short-vanish')
	loader.style.zIndex = '2'
	initial.style.zIndex = '1'
	initial.classList.remove('short-vanish')

	HideShowCont()
	$('#product-reel')
		.reel(
			'images',
			`./assets/${currentButton}/threesixty/${currentButton}_#.jpg`
		)
		.bind('loaded', function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'
			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		})

	rotation.classList.toggle('show')
	rotation.classList.toggle('hidden')
	createBackButton('rotationPage')
	window.addEventListener('resize', resizeRotation)

	setTimeout(() => {
		showCont.innerHTML = ''
	}, 300)
}

function resizeRotation() {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}
	ArreglarLineas()
	createBackButton('rotationPage')
}

function exitRotation() {
	ArreglarLineas()
	backButtonRotation.style.pointerEvents = 'none'

	console.log('remove show')
	rotation.classList.remove('show')
	rotation.classList.add('short-vanish')
	createContent(buttonContent[currentButton], currentButton)
	animations()

	HideShowCont()
	window.removeEventListener('resize', resizeRotation)
}

function backButtonFunction() {
	ArreglarLineas()
	buttonGridContainer.style.pointerEvents = 'none'
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(video2, video2, video3)
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		loop.classList.remove('short-vanish')
		loop.classList.add('show')
		loop.play()
		setTimeout(() => {
			video1.remove()
			video2.remove()
			video3.remove()
			HideShowMainButtons()
		}, 500)

		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}

		showCont.innerHTML = ''
	})
}
function backButtonFunctionFromBack() {
	console.log('working')
	ArreglarLineas()

	subVideoTurn.play()
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	subVideoTurn.addEventListener('ended', () => {
		console.log('subVideoTurn ending')
		loop.classList.remove('short-vanish')
		loop.classList.add('show')

		setTimeout(() => {
			loop.play()
		}, 0)
		subVideoTurn.classList.add('short-vanish')
		console.log(pageIndex)
		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}
		video1.remove()
		video2.remove()
		video3.remove()
		HideShowMainButtons()
		showCont.innerHTML = ''
	})
}

function backButtonFunctionFront() {
	ArreglarLineas()

	console.log('backbuttonfunctionfront')
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3)
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		video2.classList.remove('short-vanish')
		showCont.innerHTML = ''
		console.log('back from back')

		video2.currentTime = 0
		pageIndex = 'mainMenuFront'
		console.log(currentButton)
		createContent(buttonContent[currentButton], currentButton)

		animations()

		HideShowCont()
		subVideo1.remove()
		subVideo2.remove()
		subVideo3.remove()
	})
}

function backButtonFunctionBack() {
	ArreglarLineas()
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3)
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		subVideoTurn.classList.remove('short-vanish')
		showCont.innerHTML = ''

		pageIndex = 'mainMenuBack'
		createContent(buttonContent[dataId[1]], dataId[1])

		HideShowCont()
	})
}

function createBackButton(param) {
	console.log(pageIndex)
	if (param === 'rotationPage') {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')

		centerContainerMade.setAttribute('id', 'centerContainer_text')
		const textContainerMade = document.createElement('div')
		textContainerMade.classList.add('textContainer')
		textContainerMade.style.width = containVideoWidth + 'px'
		textContainerMade.style.height = containVideoHeight + 'px'
		rotationPage = document.createElement('div')
		rotationPage.classList.add('rotationPage')

		backButtonRotation = document.createElement('button')
		backButtonRotation.classList.add('backButton')
		backButtonRotation.style.fontSize = buttonFontvar
		backButtonRotation.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButtonRotation.classList.add('button')
		backButtonRotation.addEventListener('click', exitRotation)
		console.log(backButtonRotation)
		backButtonRotation.textContent = 'Back'
		backButtonRotation.style.pointerEvents = 'all'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/tridentLogoW.png'
		brandIcon.classList.add('brandIcon', 'brandIconR')
		backButtonContainer.classList.add('viewRContainer')

		rotation.appendChild(centerContainerMade)
		centerContainerMade.appendChild(textContainerMade)

		textContainerMade.appendChild(rotationPage)
		rotationPage.appendChild(backButtonContainer)
		backButtonContainer.appendChild(backButtonRotation)
		backButtonContainer.appendChild(brandIcon)
		centerContainerMade.setAttribute('id', 'rotation_backButton')
	} else {
		backButton = document.createElement('button')
		backButton.classList.add('backButton')
		backButton.style.fontSize = buttonFontvar

		// backButton.style.width = `calc(45px + (140 - 45) * ((${
		// 	containVideoWidth + 'px'
		// } - 320px) / (1440 - 320)))`

		backButton.classList.add('button')

		backButton.textContent = 'Back'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/tridentLogoW.png'
		brandIcon.classList.add('brandIcon')
		backButtonContainer.classList.add('backButtonContainer')
		console.log(pageIndex)
		if (pageIndex !== 'mainMenuFront') {
			backButtonContainer.style.height = '100%'
			backButtonContainer.style.width = '90%'
			backButtonContainer.style.flexDirection = 'column'
			backButtonContainer.style.alignItems = 'flex-start'
		}
		firstPage.appendChild(backButtonContainer)

		backButtonContainer.appendChild(brandIcon)
		backButtonContainer.appendChild(backButton)
		if (pageIndex !== 'mainMenuFront') {
			console.log('submenu')
			backButton.addEventListener('click', backButtonFunctionFront)
		} else if (pageIndex === 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunction)
		}
	}
}

function ArreglarLineas() {
	const svgContainer = document.querySelectorAll('.svgContainer')
	const buttonContainer = document.querySelectorAll('.buttonContainer')
	for (let i = 0; i < svgContainer.length; i++) {
		svgContainer[i].style.width = containVideoWidth + 'px'
		svgContainer[i].style.height = containVideoHeight + 'px'
	}

	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}

	// if (!mainButtons.classList.contains('disabled')) {
	// 	mainButtons.classList.add('show')
	// }
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight
	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')
	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.videoWidth,
		img.videoHeight,
		parseInt(pos[0])
	)
}

loop.addEventListener('loadedmetadata', function (e) {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
})

if (loop.readyState >= 1) {
	setFontSizes()
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
}

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
})

window.addEventListener('resize', function () {
	if (loop.readyState >= 1) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})

////////// Event Listeners for the main buttons //////////

fullscreen_button.addEventListener('click', function (e) {
	expand.classList.toggle('disabledb')
	contract.classList.toggle('disabledb')

	if (!document.fullscreenElement) {
		mainContainer.webkitRequestFullscreen()
		mainContainer.webkitEnterFullscreen()
		mainContainer.requestFullscreen()
	} else {
		document.exitFullscreen()
		document.webkitExitFullscreen()
	}
})

mainMenuB.forEach((e, i) => {
	dataId[i] = e.dataset.id
	dataVariant[i] = e.dataset.variant

	e.addEventListener('click', function (e) {
		pageIndex = 'mainMenuFront'
		currentButton = dataId[i]
		HideShowMainButtons()
		if (dataVariant[i]) {
			createVideos(
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}1.mp4`,
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}2.mp4`,
				`assets/${dataId[i]}${dataVariant[i]}/${dataId[i]}3.mp4`
			)
		} else {
			createVideos(
				`assets/${dataId[i]}/${dataId[i]}1.mp4`,
				`assets/${dataId[i]}/${dataId[i]}2.mp4`,
				`assets/${dataId[i]}/${dataId[i]}3.mp4`
			)
		}

		if (showCont.innerHTML !== '') {
			setTimeout(() => {
				showCont.innerHTML = ''
			}, 0)
		}

		createContent(buttonContent[dataId[i]], dataId[i])
		console.log(dataId[i])
		window.addEventListener('resize', function (e) {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')

				const backButtonContainer = document.querySelector(
					'#centerContainer_backButton'
				)
				textContainer.remove()
				showCont.innerHTML = ''

				console.log(pageIndex)
				if (pageIndex === 'mainMenuFront') {
					console.log(globalParent)
					console.log(buttonContent[globalParent])
					createContent(buttonContent[dataId[i]], dataId[i])
				} else {
					createContent(
						buttonContent[globalParent].boxInfo[pageIndex],
						dataId[i]
					)
				}

				animations()
				if (subVideo2) {
					subVideo2.currentTime = 0
					subVideo2.play()
				}
			}
		})
		check1()
		let videoscheck = false
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					videoscheck = true
				}

				setTimeout(() => {
					if (!videoscheck) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (videoscheck) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					loop.classList.remove('show')
					video1.style.opacity = 1

					setTimeout(() => {
						video1.play()
						video1.addEventListener('ended', () => {
							animations()

							InterpolateVideo(loop, video1, video2)
							if (
								dataId[i] === 'whyF' ||
								dataId[i] === 'in-houseT' ||
								dataId[i] === 'useC'
							) {
								console.log(video2, video3)
								video2.loop = false
								video2.addEventListener('ended', () => {
									console.log('se ha hecho ')

									backButtonFunction()
								})
							}
							HideShowCont()
						})
					}, 0)
				}
			}
		}
	})
})

// Check when the spinner is fully loaded
var SirvOptions = {
	spin: {
		onready: function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'

			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		},
	},
}

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
