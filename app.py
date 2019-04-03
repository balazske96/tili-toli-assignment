from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/game')
def tilitoli():
    return render_template('index.html')


@app.route('/', methods=['POST', 'GET'])
def welcome():
    if request.method == 'GET':
        return render_template('welcomepage.html')
    else:
        player_name = request.form['name']
        return render_template('welcomepage.html', player=player_name)


if __name__ == '__main__':
    app.run(debug=True, port='0.0.0.0')
