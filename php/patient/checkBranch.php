<?php


//Seeing which branch user as selected to insert/delete/search/modify in (For Headquarter Branch Only)..
//..AND including the code for the selected branch


if(isset($_POST['patientInsert'])){
$BRANCH =$_POST['branch'];
    if($BRANCH=='Karachi')
    {
       include("server.php");
    }
    elseif($BRANCH=='Akram\'s Server')
    {
        include("server.php");
    }
    elseif($BRANCH=='Qadir\'s Server');
    {
    include("server.php");
    }
}//END INSERTION


if(isset($_POST['inventoringShow'])){
    $BRANCH ='Karachi';
        include("server.php");
}//END SHOW

            

?>
