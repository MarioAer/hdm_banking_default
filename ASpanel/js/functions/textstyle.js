/*
 * Copyright 2015 Annabell Schmidt, Patrick Muenster
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and 
 * limitations under the License.
 */


/**
 * @author Annabell Schmidt
 */

/**
 * sets the font-family to the given value
 * @param {string} value
 */
function changeTextStyle(value){
	if (value == 'Default'){
		$('body').css('font-family', '"' + defaultTextStyle + '"');
	}else{
		$('body').css('font-family', '"' + value + '"');	
	}	
}

/**
 * get the default text style
 * @return {string}		current setting for font-family
 */
function getDefaultTextStyle(){
	return $('body').css('font-family');
}
