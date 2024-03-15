def buscaBinaria(lista, item):
    baixo = 0  # Começamos definindo a base como 0 que é o primeiro item da lista
    alto = len(lista) - 1 # Definindo o ultimo item da lista, colocamos o menos 1 pois a primeira posição e zero

    cont = 1

    while baixo <= alto:
        meio = int((baixo + alto) / 2) # Aqui sempre vamos peguar o intem do meio
        chute = lista[meio]  # Pegando o valor do meio para verificar se igual o item

        if chute == item: # Se o chute for igual o item eu retorno esse item
            print(cont)
            return meio
    
        if chute > item:  # Verificamos se chute é maior que item e se for a gente pode iginorar a metade superior ao item passanso assim o alto para meio - 1. O menos um é pq já sabemos que meio não é o numero que nos queremos
            alto = meio - 1
            cont+= 1
        else: # Verificamos se chute é menor que item e dividimos a lista em dois 
            baixo = meio + 1
            cont+= 1



    return None # Retornamos nome para mostrar que o valor não existe


valore = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

print(buscaBinaria(valore,16))

