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
			<p>- scrierea corectă a cuvintelor care conţin consoana m înainte de b şi p;</p>
			<p>- corectarea unor cuvinte prin compararea cu un model.</p>
		</div>
		<div class="modal-footer">
			<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Închide</a>
		</div>
	</div>
	<div class="container">
		<div class="part part1">
			<div>
				<img src="src/img/marchiz.png" alt="" />
			</div>
		</div>
		<div class="part part2">
			<div>
			<h2>Marchizul, Prințul și Baronul</h2>
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
	<script src="src/js/lectie2.js"></script>
</body>
</html>
