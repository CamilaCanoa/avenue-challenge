# avenue-challenge

There are Basic Tests and Main Workflow tests. Some examples of basic tests are the sign up and log in. These tests are important for the software to work, and we must always perform them, automatic or manual. I chose the Main Workflow tests, which consist of ensuring that a user does what the system was designed for, and these were the deposit, the exchange and the investment. Both tests (basic and main workflow) are important for the system, but the Main Workflow is a secure check to guarantee the software quality. I made the most simplest and happiest scenarios to show what the basic software flow looks like. But in these cases we have many scenarios, which include from failure tests to other ways to get the the same results.

Manual tests Main Workflow tests 
Required entries: Valid e-mail and password 
	A Brazilian Bank with TED balance and transfere available

1. I want the user to make a deposit in reais on Avenue. 
	Given a user account with Balance of BRL 0.00 
	When to click in deposit 
	And make a TED transfer of BRL 498.00 through a Brazilian bank 
	Then the balance should update to BRL 498.00

2. I want the user to make an exchange in dollars on Avenue. 
	Given a user account with Balance of BRL 498.00 
	When to put the data on the Exchange page 
	And click the 'Perform instant exchange' button 
	Then the balance should update to U$ 89.71

3. I want the user to invest on Avenue. 
	Given a user with a balance available for exchange 
	When to access the investment asset on the Operations page 
	And to buy a unit of that investment asset 
	Then it will show a successful purchase notification

Cenários para obter o clima com POSTMAN

1. Cenário 
	Dado que quero obter o clima
	Quando informo os parâmetros corretos
	Então os parâmetros devem ser exibidos na url que consultei

2. Cenário
	Dado que quero obter o clima
	Quando informo País correto
	E Estado incorreto
	Então a url deve retornar erro 404 “city not found"

3. Cenário
	Dado que quero obter o clima
	Quando informo a Cidade correta
	E País incorreto
	Então a url deve retornar erro 

4. Cenário
	Dado que quero obter o clima
	Quando não informo a localização
	Então a url deve dar erro 400

5. Cenário 
	Dado que quero obter o clima 
	Quando não informo a chave
	Então a url deve dar erro  401 

6. Cenário
	Dado que quero obter o clima
	Quando informo a linguagem ab_xy
	Então os parâmetros devem ser exibidos na url que consultei em inglês
 




