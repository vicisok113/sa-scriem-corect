<!DOCTYPE html>
<html>
<head>
	<title></title>
	<?php include 'sub/head.php'; ?>
</head>
<body class="index">
	<div class="overlay"></div>
	<div class="row">
		<div class="logare col s10 offset-s1 m6 offset-m3 l8 offset-l2">
			<div class="card horizontal">
				<div class="card-content">
					<?php if(!$data['logat']): ?>
						<h2 class="card-title">Trebuie să te autentifici</h2>
					<?php else: ?>
						<span class="card-title">Adăugare elev</span>
					<form action="" method="POST" class="form2">
						<div class="input-field col l8 s12 offset-l2">
						  <input id="nume" name="nume" type="text" required autocomplete="off">
						  <label for="nume">Nume elev</label>
						</div>
						<br><br>
						<div class="butoncard">
							<button type="submit" class="btn blue waves-effect waves-light">Adăugare</button>
						</div>
					</form>
					<br><br>
					<table>
					   <thead>
						 <tr>
							 <th data-field="Nume elev">Nume elev</th>
							 <th data-field="Scor1">Scor1</th>
							 <th data-field="Scor2">Scor2</th>
							 <th data-field="Scor3">Scor3</th>
							 <th data-field="Scor4">Scor4</th>
							 <th data-field="Sterge">Sterge</th>
						 </tr>
					   </thead>
					   <tbody>
						  <?php foreach ($data['elevi'] as $elev) { ?>
						 <tr>
						   <td><?=$elev['nume']?></td>
						   <td><?=$elev['scor1']?></td>
						   <td><?=$elev['scor2']?></td>
						   <td><?=$elev['scor3']?></td>
						   <td><?=$elev['scor4']?></td>
						   <td><a href="" data-id="<?=$elev['id']?>" class="delbtn"><i class="material-icons">&#xE5CD;</i></a></td>
						 </tr>
						 <?php } ?>
					   </tbody>
					 </table>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
	<?php include 'sub/footer.php'; ?>
</body>
</html>
