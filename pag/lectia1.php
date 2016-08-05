<!DOCTYPE html>
<html>
<head>
	<title></title>
	<?php include 'sub/head.php'; ?>
</head>
<body class="lectie">
	<a href="#modalobj" class="waves-effect waves-light objbtn modal-trigger">Obiective</a>
	<div id="modalobj" class="modal">
		<div class="modal-content">
			<h4>Obiectivele lecției</h4>
			<p>- scrierea unor cuvinte / propoziții cu majusculă;</p>
			<p>- scrierea cu majusculă a substantivelor proprii;</p>
			<p>- învățarea, recunoașterea și utilizarea majusculelor și minusculelor.</p>
		</div>
		<div class="modal-footer">
			<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Închide</a>
		</div>
	</div>
	<div class="container">
		<div class="part part1">
			<div>
				<img src="src/img/rege.png" alt="" />
			</div>
		</div>
		<div class="part part2">
			<div>
			<h2>Regele Majusculă</h2>
			<div id="play" class="play_btn">
				<i class="material-icons">&#xE037;</i>
			</div>
			<div id="text"></div>
			</div>
		</div>
		<div class="part part3">
			<div>
				<img src="src/img/print.gif" alt="" />
			</div>
		</div>
	</div>
	<?php include 'sub/footer.php'; ?>
	<script src="src/js/lectie1.js"></script>
</body>
</html>
