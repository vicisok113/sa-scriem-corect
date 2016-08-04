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
					<?php if(!$data['logat']): ?>
						<span class="card-title">Conectare</span>
						<a href="acasa" class="btn green waves-light">Conectare ca vizitator</a>
						<div class="hr"></div>

						<form action="" method="POST" class="form2">
							<div class="input-field col l8 offset-l2">
					          <input id="email" name="email" type="text" required autocomplete="off">
					          <label for="email">Adresă email</label>
					        </div>
							<div class="clearfix"></div>
							<div class="input-field col l8 offset-l2">
					          <input id="parola" name="parola" type="password" required autocomplete="off">
					          <label for="parola">Parolă</label>
					        </div>
							<div class="clearfix"></div>
							<?php if($data['eroare_conectare']) echo '<div class="alert red">Adresa de email sau parola introdusă este incorectă.</div>'; ?>
							<div class="butoncard">
								<button type="submit" class="btn blue waves-light">Conectare ca învățător</button>
							</div>
						</form>
					<?php else: ?>
						<span class="card-title">Alegeți elevul</span>
						<form action="" method="POST">
							<div class="input-field">
							<select name="selectare_elev" required>
								<option value="" disabled selected>Alegeți un elev</option>
								<?php foreach($data['elevi'] as $el): ?>
									<option value="<?=$el['id']?>"><?=$el['nume']?></option>
								<?php endforeach; ?>
						  	</select><br>
							</div>
							<button type="submit" class="btn blue waves-light">Accesare</button>
							<div class="hr"></div><br>
							<a href="profesor" class="btn green waves-light">Administrare elevi</a>
						</form>


					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
	<?php include 'sub/footer.php'; ?>
</body>
</html>
