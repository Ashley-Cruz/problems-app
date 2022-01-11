#NOTA:
#Aqui dejo el código de Python comentado del segundo ejercicio, el cual lo pueden comparar con la función de JS

# import pandas as pd

# def getWinner(rounds, array):
#     if rounds != len(array)/2:
#         print("The number of rounds isn't correct")
#         return
#     elif rounds < 0 | rounds > 10000:
#         print("The number of round needs to be between 0 and 10000")
#         return  
#     array_p1 = []
#     array_p2 = []
#     for i in array:
#         if i % 2 == 0:
#             array_p1.append(i)
#         else:
#             array_p2.append(i)
#     df = pd.DataFrame({'player1': array_p1, 'player2': array_p2}, columns=['player1', 'player2'])
#     df['diferencia'] = df['player1'] - df['player2']
#     df['abs_diff'] = abs(df['diferencia'])
#     max_diff = max(df['abs_diff'])
#     df_final = df[df['abs_diff'] == max_diff]
#     list_final = df_final.iloc[0]
#     test = int(list_final[2])
#     winner = 0
#     if test > 0:
#         winner = 1
#     else: 
#         winner = 2
#     print(winner, list_final[3])

# getWinner(5,[140, 82, 89, 134, 90, 110, 112, 106, 88, 90])