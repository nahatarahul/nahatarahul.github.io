<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$from = 'Resume Website'; 
		$to = 'n05.rahul@gmail.com';
		$subject = $_POST['subject'];
		
		$body ="From: $name\n E-Mail: $email\n Message:\n $message";
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}
		//Check if subject has been entered
		if (!$_POST['subject']) {
			$errSubject = 'Please enter your subject';
		}
// If there are no errors, send the email
		if (!$errName && !$errEmail && !$errMessage && !$errSubject) {
			if (mail ($to, $subject, $body, $from)) {
				$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
			} else {
			}
		}
	}
?>

<!DOCTYPE HTML>
<!--
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Resume</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<section id="header">
				<header>
					<span class="image avatar"><img src="images/avatar.jpg" alt="" /></span>
					<h1 id="logo"><a href="#">RAHUL NAHATA</a></h1>
					<p>Lead Engineer<br />
					SAMSUNG</p>
				</header>
				<nav id="nav">
					<ul>
						<li><a href="#one" class="active">About</a></li>
						<li><a href="#two">Things I Can Do</a></li>
						<li><a href="#three">Career</a></li>
						<li><a href="#four">A Few Accomplishments</a></li>
						<li><a href="#five">Contact</a></li>
					</ul>
				</nav>
				<footer>
					<ul class="icons">
						<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
						<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
					</ul>
				</footer>
			</section>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<div id="main">

						<!-- One -->
							<section id="one">
								<div class="container">
									<header class="major">
										<h2>WHO I AM</h2>
										<p>I'm a 25 year old Computer Science Engineer<br />
										from Delhi, India.</p>
									</header>
									<p>  I am a result driven individual accomplished in design and development of software solutions.<br />
									I might not know everything at first but given a problem i can find its solution.</p> 
									<p>  I have 4 years of experience working as a Engineer in Samsung Research India, Noida with proficiency in Object oriented infrastructure and readiness to adapt to company needs.</p>
									<p>	 I love working with people, specially if they have the same passion I have for what they do.</p>
								</div>
							</section>

						<!-- Two -->
							<section id="two">
								<div class="container">
									<h3>Things I Can Do</h3>
									<p> I am a software programmer with good knowledge of Object oriented and scripting languages. I love structure and order and I also stand for quality. I love spending time on fixing little details.</p>
									<ul class="feature-icons">
										<li class="fa-code">Object Oreinted Programming</li>
										<li class="fa-wifi">Computer Network & Communication</li>
										<li class="fa-camera-retro">Computational Photography</li>
										<li class="fa-cogs">Intelligent Instrumentation & HCI</li>
										<li class="fa-desktop">Web Development</li>
										<li class="fa-users">Health Care systems</li>
									</ul>
								</div>
							</section>
							
						<!-- Three -->
							<section id="three">
								<div class="container">
									<h3>Experience</h3>
									<p>Samsung Research India, Noida<br />
									2013 to current</p>
									<div class="features">
										<article>
											<a href="http://www.samsung.com/in/aboutsamsung/samsungelectronics/india/rnd/" target="_blank" class="image"><img src="images/pic01.jpg" height="180" width="20" alt="" /></a>
											<div class="inner">
												<p>Engineer for Commercial R&D team for providing assistance in production line with various function tests, automation, updates and RF calibration in Android and other platforms.</p>
											</div>
										</article>
									</div>
									<h3>Internship</h3>
									<p>Technical Marketing Intern<br />
									National Instruments India, Bangalore</p>
									<div class="features">
										<article>
											<a href="http://www.ni.com/en-in.html" target="_blank" class="image"><img src="images/bangalore.png" height="180" width="20" alt="" /></a>
											<div class="inner">
												<p>Designed a VI to convert an Image into its chromaticity co-ordinates.<br />
												Designed a Presentation and demonstration on Wireless Sensor Networks and Presented at the 3rd Annual DAQ conference in PUNE.</p>
											</div>
										</article>
									</div>
									<p>Research & Development Intern<br />
									University of Technology Troyes, France</p>
									<div class="features">
										<article>
											<a href="http://lm2s.utt.fr/fr/_plugins/mypage/mypage/content/snoussi.html" target="_blank" class="image"><img src="images/france.jpg" height="180" width="20" alt="" /></a>
											<div class="inner">
												<p>Researched under prof. Hichem Snoussi, as a part CAPSEC Research Programme, working on Monitoring and Applications of Wireless Sensor Networks and on aspects related to Geo-localization.</p>
											</div>
										</article>
									</div>
								</div>
							</section>

						<!-- Four -->
							<section id="four">
								<div class="container">
									<h3>A Few Undertakings</h3>
									<div class="features">
										<article>
											<a class="image"><img src="images/tools.jpg" alt="" /></a>
											<div class="inner">
												<h4>Delegated to my minions</h4>
												<p>Implementation of Inhouse tools:<br />
												1. Real time log analysis, with predition of similar issues & dropbox feature.<br />
												2. Automation for verifying checklist during OS upgrade with EXCEL report.</p>
											</div>
										</article>
										<article>
											<a href="https://en.wikipedia.org/wiki/Symmetric_multiprocessing" target="_blank" class="image"><img src="images/smp.jpg" alt="" /></a>
											<div class="inner">
												<h4>Possibly broke spacetime</h4>
												<p>Implementation of SMP to speed up the binary download during factory process. Reduced Time by 40%.</p>
											</div>
										</article>
										<article>
											<a class="image"><img src="images/health.jpg" alt="" /></a>
											<div class="inner">
												<h4>Terraformed a small moon</h4>
												<p>Designed and Developed a Mechanism to calcualte 3 lead ECG through Mobile Devices.</p>
											</div>
										</article>
										<article>
											<a class="image"><img src="images/innovate.jpg" alt="" /></a>
											<div class="inner">
												<h4>Snapped dark matter in the wild</h4>
												<p>Designed a standalone system for Blind Signal Demodulation capable of detecting most modulations schemes and then demodulating it as a part of B.Tech project</p>
											</div>
										</article>
									</div>
								</div>
							</section>

						<!-- Five -->
							<section id="five">
								<div class="container">
									<h3>Contact Me</h3>
									<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
									<form method="post" action="index.html" enctype="multipart/form-data">
										<div class="row uniform">
											<div class="6u 12u(xsmall)"><input type="text" name="name" id="name" placeholder="Name" />
											<?php echo "<p class='text-danger'>$errName</p>";?>
											</div>
											<div class="6u 12u(xsmall)"><input type="email" name="email" id="email" placeholder="Email" />
											<?php echo "<p class='text-danger'>$errEmail</p>";?>
											</div>
										</div>
										<div class="row uniform">
											<div class="12u"><input type="text" name="subject" id="subject" placeholder="Subject" />
											<?php echo "<p class='text-danger'>$errMessage</p>";?>
											</div>
										</div>
										<div class="row uniform">
											<div class="12u"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
											<?php echo "<p class='text-danger'>$errSubject</p>";?>
											</div>
										</div>
										<div class="row uniform">
											<div class="12u">
												<ul class="actions">
													<li><input id="submit" name="submit" type="submit" class="special" value="Send Message" /></li>
													<li><input type="reset" value="Reset Form" /></li>
												</ul>
											</div>
										</div>
									</form>
								</div>
							</section>

					</div>

				<!-- Footer -->
					<section id="footer">
						<div class="container">
							<ul class="copyright">
								<li>&copy; Untitled. All rights reserved.</li>
							</ul>
						</div>
					</section>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollzer.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>