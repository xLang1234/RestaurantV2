steps to run project
1) unzip restaurantv1.zip
2) cd restaurantv1 (move to project folder)
3) npm install (install all requires packegs)
4) ionic serve --lab (run on http://localhost:8100/, http://localhost:8200/)



Change currency


change currency in 

step 1
example
change all "SGD" to "INR" in above both files
~project-folder/src/app/pages/cart-modal/cart-modal.page.ts
~project-folder/rsapp/src/app/pages/cart-modal/cart-modal.page.html

step 2 

1) setup paypal acount using specific currency like INR, SGD etc.
2) create app https://developer.paypal.com/developer/applications/(sanbox)
3) edit app and copy Client ID and replace it with "Ab1DK6wZHRKXSrkusQXkCU_982deKSdmI-z_fMWwMgCHa0jKhEl0iuJtV4EFZRed6nSNXld-JDlktJt_"
in above both files
~project-folder/src/app/pages/cart-modal/cart-modal.page.ts
~project-folder/rsapp/src/app/pages/cart-modal/cart-modal.page.html
