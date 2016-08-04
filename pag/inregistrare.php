<!DOCTYPE html>
<html>
<head>
	<title></title>
	<?php include 'sub/head.php'; ?>
</head>
<body class="index">
	<div class="overlay"></div>
	<div class="row">
		<div class="logare col s10 offset-s1 m6 offset-m3 l4 offset-l4">
			<div class="card horizontal">
				<div class="card-content">
					<span class="card-title">Înregistrare învățător</span>
					<form action="inregistrare" method="POST" class="form3">
						<div class="input-field col l8 offset-l2">
				          <input id="email" name="email" type="email" required autocomplete="off">
				          <label for="email">Adresă email</label>
				        </div>
						<div class="clearfix"></div>
						<div class="input-field col l8 offset-l2">
				          <input id="parola" name="parola" type="password" required autocomplete="off">
				          <label for="parola">Parolă</label>
				        </div>
						<div class="clearfix"></div>
						<?php if($data['eroare_inreg']==1) echo '<div class="alert red">Adresa de email este invalidă.</div>'; ?>
						<?php if($data['eroare_inreg']==2) echo '<div class="alert red">Parola introdusă este prea scurtă.</div>'; ?>
						<?php if($data['eroare_inreg']==3) echo '<div class="alert red">Există deja un cont cu această adresă de email.</div>'; ?>
						<?php if($data['succes_inreg']==1) echo '<div class="alert green">Ați fost înregistrat cu succes. Vă puteți conecta.</div>'; ?>
						<div class="butoncard">
							<button type="submit" class="btn blue waves-effect waves-light">Înregistrare ca învățător</button>
						</div>
					</form>
					<div class="hr"></div>
					<a href="" class="btn green waves-effect waves-light">Înapoi la conectare</a>
					<br>
				</div>
			</div>
		</div>
	</div>
	<?php include 'sub/footer.php'; ?>
</body>
</html>
