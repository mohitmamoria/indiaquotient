<!doctype html>
<html lang="en-us">
<head>
	<!-- Basic Page Needs -->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="utf-8">
	<title>@yield('title', 'India Quotient')</title>
	<meta name="description" content="From India. For the World.">
	<meta name="keywords" content="india, investment, venture capital, startup">
	<meta name="author" content="Mohit Mamoria">
	<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/images/favicon.ico" type="image/x-icon">

	<!-- Mobile Specific Metas-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta content="telephone=no" name="format-detection">

	<!-- Fonts -->
	<!-- Open Sans -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,600,700italic,400,700,800italic' rel='stylesheet' type='text/css'>
	<!-- VarelaRound -->
	<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
	<!-- Icon Font - Font Awesome -->
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

	<!-- Stylesheets -->

	<!-- Styles -->
	<link href="{{ elixir('css/all.css') }}" rel="stylesheet" />

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.js"></script>
		<![endif]-->

	<!--[if lte IE 9]>
		<link href="css/ie9.css?v=1" rel="stylesheet" />
		<![endif]-->
	</head>

	<body>

		<div class="wrapper" id="top">
			<!-- Index file main container -->
			@include('partials.header')

			@yield('content')

			@include('partials.footer')

			<div class="top-scroll"><i class="fa fa-angle-up"></i></div>

		</div>

		<!-- JavaScript-->
		<!-- External-->
		<!-- jQuery 1.10.1-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		
		<!-- Mobile menu -->
		<script src="{{ elixir('js/all.js') }}"></script>


		@yield('scripts')

	</body>
	</html>